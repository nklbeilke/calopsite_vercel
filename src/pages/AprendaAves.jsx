import { Link } from "react-router-dom"

import calopsitaAprenda from "../assets/calopsita_aprenda.png"
import periquitoAprenda from "../assets/periquito_aprenda.png"
import canarioAprenda from "../assets/canario_aprenda.png"
import agapornisAprenda from "../assets/agapornis_aprenda.png"
import papagaioAprenda from "../assets/papagaio_aprenda.png"
import ringneckAprenda from "../assets/ringneck_aprenda.png"
import cacatuaAprenda from "../assets/cacatua_aprenda.png"
import araraAprenda from "../assets/arara_aprenda.png"
import corujaAprenda from "../assets/coruja_aprenda.png"

const aves = [
  {
    nome: "Calopsita",
    imagem: calopsitaAprenda,
    rota: "/aprenda/aves/calopsita",
  },
  {
    nome: "Periquito",
    imagem: periquitoAprenda,
    rota: "/aprenda/aves/periquito",
  },
  {
    nome: "Canário",
    imagem: canarioAprenda,
    rota: "/aprenda/aves/canario",
  },
  {
    nome: "Agapornis",
    imagem: agapornisAprenda,
    rota: "/aprenda/aves/agapornis",
  },
  {
    nome: "Papagaio",
    imagem: papagaioAprenda,
    rota: "/aprenda/aves/papagaio",
  },
  {
    nome: "Ring Neck",
    imagem: ringneckAprenda,
    rota: "/aprenda/aves/ringneck",
  },
  {
    nome: "Cacatua",
    imagem: cacatuaAprenda,
    rota: "/aprenda/aves/cacatua",
  },
  {
    nome: "Arara",
    imagem: araraAprenda,
    rota: "/aprenda/aves/arara",
  },
  {
    nome: "Coruja",
    imagem: corujaAprenda,
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