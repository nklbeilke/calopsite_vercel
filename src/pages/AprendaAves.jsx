import { Link } from "react-router-dom"

import calopsita from "../assets/calopsita.png"
import periquito from "../assets/periquito.png"
import canario from "../assets/canario.png"
import agapornis from "../assets/agapornis.png"
import papagaio from "../assets/papagaio.png"
import ringneck from "../assets/ringneck.png"
import cacatua from "../assets/cacatua.png"
import arara from "../assets/arara.png"
import coruja from "../assets/coruja.png"

const aves = [
  {
    nome: "Calopsita",
    imagem: calopsita,
    rota: "/aprenda/aves/calopsita",
  },
  {
    nome: "Periquito",
    imagem: periquito,
    rota: "/aprenda/aves/periquito",
  },
  {
    nome: "Canário",
    imagem: canario,
    rota: "/aprenda/aves/canario",
  },
  {
    nome: "Agapornis",
    imagem: agapornis,
    rota: "/aprenda/aves/agapornis",
  },
  {
    nome: "Papagaio",
    imagem: papagaio,
    rota: "/aprenda/aves/papagaio",
  },
  {
    nome: "Ring Neck",
    imagem: ringneck,
    rota: "/aprenda/aves/ringneck",
  },
  {
    nome: "Cacatua",
    imagem: cacatua,
    rota: "/aprenda/aves/cacatua",
  },
  {
    nome: "Arara",
    imagem: arara,
    rota: "/aprenda/aves/arara",
  },
  {
    nome: "Coruja",
    imagem: coruja,
    rota: "/aprenda/aves/coruja",
  },
]

export default function AprendaAves() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-[1400px] mx-auto">

        <h1 className="text-5xl font-bold text-center text-[#3B2F2F] mb-4">
          Aves
        </h1>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">
          Explore informações confiáveis sobre diferentes espécies de aves,
          conheça suas características, alimentação, comportamento e os
          principais cuidados para promover seu bem-estar.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aves.map((ave) => (
            <Link
              key={ave.nome}
              to={ave.rota}
              className="
                block
                rounded-3xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={ave.imagem}
                  alt={ave.nome}
                  className="
                    w-full
                    h-auto
                    object-contain
                    rounded-3xl
                  "
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}