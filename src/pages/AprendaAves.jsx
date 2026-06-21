import { Link } from "react-router-dom"

import calopsita from "../assets/calopsita.png"
import periquito from "../assets/periquito.png"
import canario from "../assets/canario.png"

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

        <div className="grid md:grid-cols-3 gap-8">

          {aves.map((ave) => (

            <Link
              key={ave.nome}
              to={ave.rota}
              className="group"
            >

              <img
                src={ave.imagem}
                alt={ave.nome}
                className="
                  w-full
                  h-auto
                  rounded-3xl
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:shadow-xl
                "
              />

            </Link>

          ))}

        </div>

      </div>

    </main>
  )
} 