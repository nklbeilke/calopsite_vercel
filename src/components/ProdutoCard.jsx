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
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "https://placehold.co/300x200?text=Produto";
          }}
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1 line-clamp-2">
          {nome}
        </h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2 flex-1">
          {descricao}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-orange-600 font-bold text-lg">
            R$ {preco.toFixed(2).replace(".", ",")}
          </span>
          <button
            type="button"
            onClick={handleComprar}
            className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
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
