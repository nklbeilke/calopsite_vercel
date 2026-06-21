import { Link } from "react-router-dom"

import calopsita from "../assets/calopsita.png"
import periquito from "../assets/periquito.png"
import canario from "../assets/canario.png"
import agapornis from "../assets/agapornis.png"
import papagaio from "../assets/papagaio.png"
import ringneck from "../assets/ringneck.png"

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
]

export default function AprendaAves() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">

      <div className="max-w-[1400px] mx-auto">

        <h1 className="text-5xl font-bold text-center text-[#3B2F2F] mb-4">
          Aves
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Conheça diferentes espécies e aprenda sobre seus cuidados.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {aves.map((ave) => (

            <Link
              key={ave.nome}
              to={ave.rota}
              className="group block"
            >

              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={ave.imagem}
                  alt={ave.nome}
                  className="
                    w-full
                    h-auto
                    aspect-square
                    object-cover
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:shadow-xl
                  "
                />
              </div>

              <p className="mt-3 text-center text-sm font-semibold text-[#3B2F2F]">
                {ave.nome}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>
  )
}
