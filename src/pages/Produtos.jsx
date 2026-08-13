import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import produtos from "../data/Produtos";
import ProdutoCard from "../components/ProdutoCard";
import FiltrosProdutos from "../components/FiltrosProdutos";

const nomesCategorias = {
  alimentacao: "Alimentação",
  habitat: "Habitat",
  enriquecimento: "Enriquecimento",
};

const nomesSubcategorias = {
  racoes: "Rações",
  sementes: "Sementes",
  petiscos: "Petiscos",
  "alimentos-naturais": "Alimentos Naturais",
  gaiolas: "Gaiolas",
  poleiros: "Poleiros",
  ninhos: "Ninhos",
  acessorios: "Acessórios",
  brinquedos: "Brinquedos",
  escadas: "Escadas",
  balancos: "Balanços",
};

export default function Produtos() {
  const { categoria, subcategoria: subcategoriaUrl } = useParams();

  const [subcategoria, setSubcategoria] = useState(subcategoriaUrl || "");

  useEffect(() => {
    setSubcategoria(subcategoriaUrl || "");
  }, [categoria, subcategoriaUrl]);

  const produtosDaCategoria = produtos.filter((p) => {
    if (categoria) {
      return p.categoria === categoria;
    }
    return true;
  });

  const opcoesSubcategoria = useMemo(() => {
    const vistas = new Set();
    return produtosDaCategoria.reduce((acc, p) => {
      if (!vistas.has(p.subcategoria)) {
        vistas.add(p.subcategoria);
        acc.push({ valor: p.subcategoria, label: nomesSubcategorias[p.subcategoria] || p.subcategoria });
      }
      return acc;
    }, []);
  }, [produtosDaCategoria]);

  const produtosDaSubcategoria = produtosDaCategoria.filter((p) =>
    subcategoria ? p.subcategoria === subcategoria : true
  );

  const precoMaximoDisponivel = useMemo(() => {
    const maior = Math.max(0, ...produtosDaSubcategoria.map((p) => p.preco));
    return Math.ceil(maior / 5) * 5 || 100;
  }, [produtosDaSubcategoria]);

  const [especie, setEspecie] = useState("");
  const [precoMax, setPrecoMax] = useState(precoMaximoDisponivel);
  const [ordenacao, setOrdenacao] = useState("relevancia");

  const precoMaxAtivo = precoMax > precoMaximoDisponivel ? precoMaximoDisponivel : precoMax;

  const produtosFiltrados = produtosDaSubcategoria
    .filter((p) => (especie ? p.especies?.includes(especie) : true))
    .filter((p) => p.preco <= precoMaxAtivo)
    .sort((a, b) => {
      if (ordenacao === "menor-preco") return a.preco - b.preco;
      if (ordenacao === "maior-preco") return b.preco - a.preco;
      if (ordenacao === "nome") return a.nome.localeCompare(b.nome);
      return 0;
    });

  const titulo = subcategoria
    ? nomesSubcategorias[subcategoria] || subcategoria
    : categoria
    ? nomesCategorias[categoria] || categoria
    : "Todos os Produtos";

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold capitalize mb-2">{titulo}</h1>
      <p className="text-gray-500 mb-8">
        {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-start">
        <FiltrosProdutos
          especie={especie}
          setEspecie={setEspecie}
          precoMax={precoMaxAtivo}
          setPrecoMax={setPrecoMax}
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
          precoMaximoDisponivel={precoMaximoDisponivel}
          subcategoria={subcategoria}
          setSubcategoria={setSubcategoria}
          opcoesSubcategoria={opcoesSubcategoria}
        />

        {produtosFiltrados.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-2xl">Nenhum produto encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
