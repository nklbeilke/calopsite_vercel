import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

import { CartContext } from "../context/CartContext";

export default function Carrinho() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const itens = cart?.itens || [];

  if (itens.length === 0) {
    return (
      <main className="bg-[#F7F3EE] min-h-screen px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <FaShoppingCart className="mx-auto text-5xl text-[#C9B8A3] mb-4" />
          <h1 className="text-3xl font-bold text-[#2C2016] mb-2">Seu carrinho está vazio</h1>
          <p className="text-gray-500 mb-8">
            Adicione produtos para cuidar da sua ave com carinho.
          </p>
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

  return (
    <main className="bg-[#F7F3EE] min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C2016] mb-8">Meu Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {itens.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-4 flex items-center gap-4"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-20 h-20 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/80x80?text=Produto";
                  }}
                />

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#2C2016] text-sm leading-snug line-clamp-2">
                    {item.nome}
                  </p>
                  <p className="text-orange-600 font-bold mt-1">
                    R$ {item.preco.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                <div className="flex items-center gap-2 border border-[#E0D5C8] rounded-full px-2 py-1">
                  <button
                    type="button"
                    onClick={() => cart.alterarQuantidade(item.id, item.quantidade - 1)}
                    disabled={item.quantidade <= 1}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-[#7A5C34] hover:bg-[#F5EDE0] disabled:opacity-30 transition"
                    aria-label="Diminuir quantidade"
                  >
                    <FaMinus size={10} />
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-[#2C2016]">
                    {item.quantidade}
                  </span>
                  <button
                    type="button"
                    onClick={() => cart.alterarQuantidade(item.id, item.quantidade + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-[#7A5C34] hover:bg-[#F5EDE0] transition"
                    aria-label="Aumentar quantidade"
                  >
                    <FaPlus size={10} />
                  </button>
                </div>

                <p className="w-24 text-right font-semibold text-[#2C2016] hidden sm:block">
                  R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
                </p>

                <button
                  type="button"
                  onClick={() => cart.removerItem(item.id)}
                  aria-label="Remover item"
                  title="Remover"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 transition flex-shrink-0"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => cart.limparCarrinho()}
              className="self-start text-sm text-gray-400 hover:text-red-500 transition mt-2"
            >
              Esvaziar carrinho
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-[#2C2016] mb-4">Resumo</h2>

            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>
                {cart.totalItens} {cart.totalItens === 1 ? "item" : "itens"}
              </span>
              <span>R$ {cart.totalPreco.toFixed(2).replace(".", ",")}</span>
            </div>

            <div className="border-t border-[#E0D5C8] my-4" />

            <div className="flex justify-between items-baseline mb-6">
              <span className="font-semibold text-[#2C2016]">Total</span>
              <span className="text-2xl font-bold text-orange-600">
                R$ {cart.totalPreco.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
            >
              Finalizar compra
            </button>

            <Link
              to="/produtos"
              className="block text-center text-sm text-[#7A5C34] font-medium mt-4 hover:underline"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
