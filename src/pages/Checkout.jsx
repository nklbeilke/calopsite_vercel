import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { criarPedido } from "../utils/pedidos";

const FORMAS_PAGAMENTO = [
  { value: "pix", label: "Pix" },
  { value: "cartao_entrega", label: "Cartão na entrega" },
  { value: "dinheiro_entrega", label: "Dinheiro na entrega" },
];

function normalizeCep(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 8);
}

function formatCep(digits) {
  return digits.replace(/(\d{5})(\d)/, "$1-$2");
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
  const [formaPagamento, setFormaPagamento] = useState(FORMAS_PAGAMENTO[0].value);

  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

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
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-[#2C2016] mb-2">Pedido confirmado!</h1>
          <p className="text-gray-500 mb-1">
            Pedido nº <strong>{pedidoConfirmado.id_pedido}</strong> — total de{" "}
            R$ {pedidoConfirmado.valor_total.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-gray-500 mb-6">
            Vamos entrar em contato por telefone para combinar o pagamento e a entrega.
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

  async function onSubmit(e) {
    e.preventDefault();
    setErro("");

    const mensagemErro = validate();
    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

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
        forma_pagamento: formaPagamento,
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

        <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <Campo label="Rua">
                    <input value={rua} onChange={(e) => setRua(e.target.value)} className={inputClass} />
                  </Campo>
                </div>
                <Campo label="Número">
                  <input value={numero} onChange={(e) => setNumero(e.target.value)} className={inputClass} />
                </Campo>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Campo label="Complemento (opcional)">
                  <input value={complemento} onChange={(e) => setComplemento(e.target.value)} className={inputClass} />
                </Campo>
                <Campo label="Bairro">
                  <input value={bairro} onChange={(e) => setBairro(e.target.value)} className={inputClass} />
                </Campo>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="sm:col-span-2">
                  <Campo label="Cidade">
                    <input value={cidade} onChange={(e) => setCidade(e.target.value)} className={inputClass} />
                  </Campo>
                </div>
                <Campo label="Estado (UF)">
                  <input
                    value={estado}
                    onChange={(e) => setEstado(e.target.value.slice(0, 2))}
                    placeholder="PR"
                    className={inputClass}
                  />
                </Campo>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Campo label="CEP">
                  <input
                    value={formatCep(normalizeCep(cep))}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000"
                    inputMode="numeric"
                    className={inputClass}
                  />
                </Campo>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-6">
              <h2 className="text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] inline-block w-fit px-2.5 py-1 rounded mb-4">
                Forma de pagamento
              </h2>

              <div className="flex flex-col gap-3">
                {FORMAS_PAGAMENTO.map((forma) => (
                  <label
                    key={forma.value}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition ${
                      formaPagamento === forma.value
                        ? "border-orange-400 bg-orange-50"
                        : "border-[#E0D5C8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="forma_pagamento"
                      value={forma.value}
                      checked={formaPagamento === forma.value}
                      onChange={(e) => setFormaPagamento(e.target.value)}
                    />
                    <span className="text-sm text-[#2C2016]">{forma.label}</span>
                  </label>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4">
                O pagamento é combinado diretamente com a gente no momento da entrega.
              </p>
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

            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
            >
              {enviando ? "Enviando pedido..." : "Confirmar pedido"}
            </button>

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
