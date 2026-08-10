import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { FaCheck, FaRegCopy } from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { criarPedido } from "../utils/pedidos";

function normalizeCep(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 8);
}

function formatCep(digits) {
  return digits.replace(/(\d{5})(\d)/, "$1-$2");
}

function gerarCodigoPixSimulado(valor) {
  const txid = Math.random().toString(36).slice(2, 10).toUpperCase();
  return (
    `00020126ambientedeteste0014BR.GOV.BCB.PIX0111calopsite.shop` +
    `5204000053039865406${valor.toFixed(2)}5802BR5913CALOPSITE${txid}`
  );
}

export default function Checkout() {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const user = auth?.user;
  const itens = cart?.itens || [];

  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const [buscandoCep, setBuscandoCep] = useState(false);
  const [erroCep, setErroCep] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

  const [pixGerado, setPixGerado] = useState(false);
  const [codigoPix, setCodigoPix] = useState("");
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    const cepLimpo = normalizeCep(cep);
    if (cepLimpo.length !== 8) {
      setErroCep("");
      return;
    }

    let cancelado = false;
    setBuscandoCep(true);
    setErroCep("");

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json())
      .then((dados) => {
        if (cancelado) return;

        if (dados.erro) {
          setErroCep("CEP não encontrado");
          return;
        }

        setRua(dados.logradouro || "");
        setBairro(dados.bairro || "");
        setCidade(dados.localidade || "");
        setEstado(dados.uf || "");
      })
      .catch(() => {
        if (!cancelado) setErroCep("Não foi possível buscar o CEP");
      })
      .finally(() => {
        if (!cancelado) setBuscandoCep(false);
      });

    return () => {
      cancelado = true;
    };
  }, [cep]);

  if (!user) {
    return (
      <main className="bg-[#F7F3EE] min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-8">
          <h1 className="text-2xl font-bold text-[#2C2016] mb-2">Entre para finalizar a compra</h1>
          <p className="text-gray-500 mb-6">
            Você precisa estar logado para concluir seu pedido.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
            >
              Entrar
            </Link>
            <Link
              to="/cadastro"
              className="text-[#7A5C34] font-semibold hover:underline"
            >
              Criar uma conta
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (pedidoConfirmado) {
    return (
      <main className="bg-[#F7F3EE] min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-8">
          <h1 className="text-2xl font-bold text-[#2C2016] mb-2">Pedido confirmado</h1>
          <p className="text-gray-500 mb-1">
            Pedido nº <strong>{pedidoConfirmado.id_pedido}</strong> — total de{" "}
            R$ {pedidoConfirmado.valor_total.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-gray-500 mb-6">
            Pagamento via Pix confirmado. Vamos preparar seu pedido para envio.
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Voltar para a Home
          </Link>
        </div>
      </main>
    );
  }

  if (itens.length === 0) {
    return (
      <main className="bg-[#F7F3EE] min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-[#2C2016] mb-2">Seu carrinho está vazio</h1>
          <p className="text-gray-500 mb-6">Adicione produtos antes de finalizar a compra.</p>
          <Link
            to="/produtos"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Ver produtos
          </Link>
        </div>
      </main>
    );
  }

  function validate() {
    if (!rua.trim()) return "Informe a rua";
    if (!numero.trim()) return "Informe o número";
    if (!bairro.trim()) return "Informe o bairro";
    if (!cidade.trim()) return "Informe a cidade";
    if (!estado.trim()) return "Informe o estado";
    if (normalizeCep(cep).length !== 8) return "CEP inválido";
    return "";
  }

  function onGerarPix(e) {
    e.preventDefault();
    setErro("");

    const mensagemErro = validate();
    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    setCodigoPix(gerarCodigoPixSimulado(cart.totalPreco));
    setPixGerado(true);
  }

  function onCopiarCodigo() {
    navigator.clipboard?.writeText(codigoPix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  async function onConfirmarPagamento() {
    setErro("");
    setEnviando(true);
    try {
      const pedido = await criarPedido({
        id_usuario: user.id_usuario,
        itens: itens.map((item) => ({
          id_produto: item.id,
          quantidade: item.quantidade,
        })),
        endereco: {
          rua: rua.trim(),
          numero: numero.trim(),
          complemento: complemento.trim() || null,
          bairro: bairro.trim(),
          cidade: cidade.trim(),
          estado: estado.trim().toUpperCase(),
          cep: normalizeCep(cep),
        },
        forma_pagamento: "pix",
        frete: 0,
        parcelas: 1,
      });

      cart.limparCarrinho();
      setPedidoConfirmado(pedido);
    } catch (ex) {
      setErro(ex?.message || "Falha ao finalizar pedido");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="bg-[#F7F3EE] min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C2016] mb-8">Finalizar Compra</h1>

        <form onSubmit={onGerarPix} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-6">
              <h2 className="text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] inline-block w-fit px-2.5 py-1 rounded mb-4">
                Endereço de entrega
              </h2>

              {erro ? (
                <div className="mb-4 flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
                  <span className="text-base mt-0.5">⚠️</span>
                  <p className="text-xs text-[#8A2C26] leading-relaxed">{erro}</p>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Campo label="CEP">
                  <input
                    value={formatCep(normalizeCep(cep))}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000"
                    inputMode="numeric"
                    className={inputClass}
                    disabled={pixGerado}
                  />
                  {buscandoCep ? (
                    <p className="text-xs text-gray-400 mt-1.5">Buscando endereço...</p>
                  ) : erroCep ? (
                    <p className="text-xs text-[#8A2C26] mt-1.5">{erroCep}</p>
                  ) : null}
                </Campo>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="sm:col-span-2">
                  <Campo label="Rua">
                    <input value={rua} onChange={(e) => setRua(e.target.value)} className={inputClass} disabled={pixGerado} />
                  </Campo>
                </div>
                <Campo label="Número">
                  <input value={numero} onChange={(e) => setNumero(e.target.value)} className={inputClass} disabled={pixGerado} />
                </Campo>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Campo label="Complemento (opcional)">
                  <input value={complemento} onChange={(e) => setComplemento(e.target.value)} className={inputClass} disabled={pixGerado} />
                </Campo>
                <Campo label="Bairro">
                  <input value={bairro} onChange={(e) => setBairro(e.target.value)} className={inputClass} disabled={pixGerado} />
                </Campo>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="sm:col-span-2">
                  <Campo label="Cidade">
                    <input value={cidade} onChange={(e) => setCidade(e.target.value)} className={inputClass} disabled={pixGerado} />
                  </Campo>
                </div>
                <Campo label="Estado (UF)">
                  <input
                    value={estado}
                    onChange={(e) => setEstado(e.target.value.slice(0, 2))}
                    placeholder="PR"
                    className={inputClass}
                    disabled={pixGerado}
                  />
                </Campo>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-6">
              <h2 className="text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] inline-block w-fit px-2.5 py-1 rounded mb-4">
                Pagamento via Pix
              </h2>

              {!pixGerado ? (
                <p className="text-sm text-gray-500">
                  Preencha o endereço e clique em "Gerar QR Code Pix" para continuar.
                </p>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 rounded-xl border border-[#E0D5C8] mb-4">
                    <QRCodeSVG value={codigoPix} size={180} />
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    Escaneie o QR Code no app do seu banco ou copie o código abaixo.
                  </p>

                  <div className="w-full flex items-stretch gap-2 mb-2">
                    <input
                      readOnly
                      value={codigoPix}
                      className="flex-1 min-w-0 rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-3 py-2.5 text-xs text-[#2C2016] truncate"
                    />
                    <button
                      type="button"
                      onClick={onCopiarCodigo}
                      className="flex items-center gap-1.5 bg-[#F5EDE0] hover:bg-[#E8D8BF] text-[#7A5C34] text-xs font-semibold px-4 rounded-xl transition"
                    >
                      {copiado ? <FaCheck size={12} /> : <FaRegCopy size={12} />}
                      {copiado ? "Copiado" : "Copiar"}
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 mb-2">
                    Pagamento simulado — ambiente de testes, nenhuma cobrança real é feita.
                  </p>

                  <button
                    type="button"
                    onClick={() => setPixGerado(false)}
                    className="text-xs text-[#7A5C34] font-medium hover:underline"
                  >
                    Editar endereço
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-[#2C2016] mb-4">Resumo do pedido</h2>

            <div className="flex flex-col gap-3 mb-4 max-h-64 overflow-y-auto">
              {itens.map((item) => (
                <div key={item.id} className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-600 line-clamp-2">
                    {item.quantidade}x {item.nome}
                  </span>
                  <span className="text-[#2C2016] font-medium whitespace-nowrap">
                    R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E0D5C8] my-4" />

            <div className="flex justify-between items-baseline mb-6">
              <span className="font-semibold text-[#2C2016]">Total</span>
              <span className="text-2xl font-bold text-orange-600">
                R$ {cart.totalPreco.toFixed(2).replace(".", ",")}
              </span>
            </div>

            {!pixGerado ? (
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
              >
                Gerar QR Code Pix
              </button>
            ) : (
              <button
                type="button"
                onClick={onConfirmarPagamento}
                disabled={enviando}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
              >
                {enviando ? "Confirmando..." : "Já paguei, confirmar pedido"}
              </button>
            )}

            <Link
              to="/carrinho"
              className="block text-center text-sm text-[#7A5C34] font-medium mt-4 hover:underline"
            >
              Voltar ao carrinho
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2C2016] placeholder:text-gray-400 outline-none focus:border-[#9C7A52] focus:ring-2 focus:ring-[#9C7A52]/20 transition";

function Campo({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-[#7A5C34] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
