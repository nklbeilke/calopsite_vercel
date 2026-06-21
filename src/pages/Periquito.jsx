import periquito from "../assets/periquito.png"

export default function Periquito() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen">

      <section className="max-w-[1400px] mx-auto px-8 py-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={periquito}
            alt="Periquito"
            className="w-full rounded-3xl"
          />

          <div>

            <h1 className="text-5xl font-bold text-[#3B2F2F] mb-6">
              Periquito
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              O periquito-australiano é uma ave pequena, colorida e muito
              sociável. É uma das aves domésticas mais populares do mundo,
              conhecida por sua inteligência e facilidade de adaptação.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 pb-20 space-y-10">

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">📍 Origem</h2>
          <p>
            Originário da Austrália, vive em bandos e habita áreas abertas e
            semiáridas.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">🥗 Alimentação</h2>
          <p>
            Deve receber ração extrusada, sementes de qualidade, verduras e
            frutas próprias para aves.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">🏠 Habitat</h2>
          <p>
            Necessita de gaiola espaçosa, brinquedos e espaço para voar e se
            exercitar.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">🧠 Comportamento</h2>
          <p>
            São aves alegres, comunicativas e gostam de viver em companhia de
            outros periquitos.
          </p>
        </div>

      </section>

    </main>
  )
}