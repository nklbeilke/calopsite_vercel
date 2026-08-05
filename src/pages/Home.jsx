import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroCarousel from "../components/Carrossel";
import ProdutoCard from "../components/ProdutoCard";
import produtosCatalogo from "../data/Produtos";
import { buscarMaisVendidos } from "../utils/produtos";

export default function Home() {
  const [maisVendidos, setMaisVendidos] = useState(
    produtosCatalogo.slice(0, 5)
  );

  useEffect(() => {
    buscarMaisVendidos(5)
      .then((ranking) => {
        const produtos = ranking
          .map((item) => produtosCatalogo.find((p) => p.id === item.id_produto))
          .filter(Boolean);

        if (produtos.length > 0) {
          setMaisVendidos(produtos);
        }
      })
      .catch(() => {
        // mantém o fallback com os primeiros produtos do catálogo
      });
  }, []);

  return (
    <>
      <HeroCarousel />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-[#2C2016] mb-6">Produtos mais vendidos</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {maisVendidos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/produtos"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Ver todos os produtos
          </Link>
        </div>
      </section>
    </>
  );
}
