import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { listarPedidos } from "../utils/pedidos";

const STATUS_LABELS = {
  pendente: { label: "Pendente", className: "bg-yellow-100 text-yellow-700" },
  confirmado: { label: "Confirmado", className: "bg-blue-100 text-blue-700" },
  enviado: { label: "Enviado", className: "bg-indigo-100 text-indigo-700" },
  entregue: { label: "Entregue", className: "bg-green-100 text-green-700" },
  cancelado: { label: "Cancelado", className: "bg-red-100 text-red-700" },
};

const FORMAS_PAGAMENTO_LABELS = {
  pix: "Pix",
  cartao_entrega: "Cartão na entrega",
  dinheiro_entrega: "Dinheiro na entrega",
};

function formatarData(dataISO) {
  return new Date(dataISO).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MeusPedidos() {
  const auth = useContext(AuthContext);
  const user = auth?.user;

  const [pedidos, setPedidos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!user) return;

    setCarregando(true);
    listarPedidos(user.id_usuario)
      .then(setPedidos)
      .catch((ex) => setErro(ex?.message || "Erro ao buscar pedidos"))
      .finally(() => setCarregando(false));
  }, [user]);

  if (!user) {
    return (
      <main className="bg-[#FFF7EA] min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-8">
          <h1 className="text-2xl font-bold text-[#2C2016] mb-2">Entre para ver seus pedidos</h1>
          <p className="text-gray-500 mb-6">
            Você precisa estar logado para consultar seu histórico de pedidos.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
            >
              Entrar
            </Link>
            <Link to="/cadastro" className="text-[#7A5C34] font-semibold hover:underline">
              Criar uma conta
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FFF7EA] min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C2016] mb-8">Meus Pedidos</h1>

        {carregando ? (
          <p className="text-gray-500">Carregando pedidos...</p>
        ) : erro ? (
          <div className="flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
            <span className="text-base mt-0.5">⚠️</span>
            <p className="text-sm text-[#8A2C26]">{erro}</p>
          </div>
        ) : pedidos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-6">Você ainda não fez nenhum pedido.</p>
            <Link
              to="/produtos"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Ver produtos
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {pedidos.map((pedido) => {
              const status = STATUS_LABELS[pedido.status] || {
                label: pedido.status,
                className: "bg-gray-100 text-gray-700",
              };

              return (
                <div
                  key={pedido.id_pedido}
                  className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <p className="font-semibold text-[#2C2016]">Pedido nº {pedido.id_pedido}</p>
                      <p className="text-xs text-gray-400">{formatarData(pedido.data_pedido)}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.className}`}>
                      {status.label}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    {pedido.itens.map((item, index) => (
                      <div key={index} className="flex justify-between gap-3 text-sm">
                        <span className="text-gray-600">
                          {item.quantidade}x {item.nome_produto || `Produto #${item.id_produto}`}
                        </span>
                        <span className="text-[#2C2016] font-medium whitespace-nowrap">
                          R$ {(item.preco_unitario * item.quantidade).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#E0D5C8] pt-4 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs text-gray-400">
                      {FORMAS_PAGAMENTO_LABELS[pedido.forma_pagamento] || pedido.forma_pagamento} ·{" "}
                      {pedido.endereco?.cidade}/{pedido.endereco?.estado}
                    </p>
                    <p className="font-semibold text-[#2C2016]">
                      Total: <span className="text-orange-600">R$ {Number(pedido.valor_total).toFixed(2).replace(".", ",")}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
