import { useParams } from "react-router-dom";
import { useContext } from "react";
import produtos from "../data/Produtos";
import ProdutoCard from "../components/ProdutoCard";

export default function Produtos() {
  const { categoria, subcategoria } = useParams();

  const produtosFiltrados = produtos.filter((p) => {
    if (subcategoria) {
      return p.categoria === categoria && p.subcategoria === subcategoria;
    }
    if (categoria) {
      return p.categoria === categoria;
    }
    return true;
  });

  const titulo = subcategoria
    ? subcategoria.charAt(0).toUpperCase() + subcategoria.slice(1)
    : categoria
    ? categoria.charAt(0).toUpperCase() + categoria.slice(1)
    : "Todos os Produtos";

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold capitalize mb-2">{titulo}</h1>
      <p className="text-gray-500 mb-8">
        {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
      </p>

      {produtosFiltrados.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-2xl">Nenhum produto encontrado nesta categoria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
