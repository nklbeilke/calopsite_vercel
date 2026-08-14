import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProdutoCard({ produto }) {
  const { nome, preco, imagem, descricao } = produto;
  const cart = useContext(CartContext);
  const [adicionado, setAdicionado] = useState(false);

  function handleComprar() {
    cart?.adicionarItem?.(produto);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1500);
  }

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <div className="aspect-[3/4] w-full bg-gray-50 overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "https://placehold.co/300x200?text=Produto";
          }}
        />
      </div>

      <div className="p-2.5 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-xs leading-snug mb-1 line-clamp-2">
          {nome}
        </h3>
        <p className="text-gray-500 text-[11px] mb-2 line-clamp-1 flex-1">
          {descricao}
        </p>
        <div className="flex items-center justify-between mt-auto gap-1">
          <span className="text-orange-600 font-bold text-sm whitespace-nowrap">
            R$ {preco.toFixed(2).replace(".", ",")}
          </span>
          <button
            type="button"
            onClick={handleComprar}
            className={`text-[11px] px-2 py-1 rounded-lg transition-colors whitespace-nowrap ${
              adicionado
                ? "bg-green-600 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            {adicionado ? "Adicionado!" : "Comprar"}
          </button>
        </div>
      </div>
    </div>
  );
}
