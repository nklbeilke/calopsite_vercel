import { Link } from "react-router-dom"

export default function Aprenda() {
  return (
    <>

      <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">

        {/* TÍTULO */}
        <section className="text-center mb-14">

          <h1 className="text-5xl font-bold text-[#3B2F2F] mb-4">
            Aprenda
          </h1>x

          <p className="text-gray-600 text-lg">
            Conhecimento, cuidado e conscientização sobre aves e meio ambiente.
          </p>

        </section>

        {/* CARDS */}
        <section className="max-w-[1200px] mx-auto grid grid-cols-2 gap-10">

          {/* AVES */}
          <Link to="/aprenda/aves">

            <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300 cursor-pointer h-[320px] flex flex-col justify-center border border-[#F2E6CC]">

              <span className="text-6xl mb-6">
                🐦
              </span>

              <h2 className="text-3xl font-bold text-[#3B2F2F] mb-4">
                Aves
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Conheça espécies, alimentação, habitat,
                enriquecimento ambiental e cuidados essenciais.
              </p>

            </div>

          </Link>

          {/* MEIO AMBIENTE */}
          <Link to="/aprenda/meio-ambiente">

            <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300 cursor-pointer h-[320px] flex flex-col justify-center border border-[#F2E6CC]">

              <span className="text-6xl mb-6">
                🌎
              </span>

              <h2 className="text-3xl font-bold text-[#3B2F2F] mb-4">
                Meio Ambiente
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Aprenda sobre conservação, biodiversidade,
                sustentabilidade e preservação das aves.
              </p>

            </div>

          </Link>

        </section>

      </main>
    </>
  )
}