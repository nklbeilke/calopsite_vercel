import canario from "../assets/canario.png"

export default function Canario() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen">

      <section className="max-w-[1400px] mx-auto px-8 py-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={canario}
            alt="Canário"
            className="w-full rounded-3xl"
          />

          <div>

            <h1 className="text-5xl font-bold text-[#3B2F2F] mb-6">
              Canário
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              O canário é famoso por seu canto melodioso e sua coloração
              vibrante. É uma ave tranquila e muito apreciada por amantes de
              pássaros.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 pb-20 space-y-10">

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">📍 Origem</h2>
          <p>
            Descendente do canário-do-reino, originário das Ilhas Canárias,
            Madeira e Açores.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">🥗 Alimentação</h2>
          <p>
            Sua dieta inclui sementes, ração extrusada, verduras e frutas
            apropriadas.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">🏠 Habitat</h2>
          <p>
            Deve viver em ambiente limpo, arejado e com espaço suficiente para
            movimentação.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold mb-4">🧠 Comportamento</h2>
          <p>
            São aves calmas e independentes, conhecidas principalmente pelo seu
            canto harmonioso.
          </p>
        </div>

      </section>

    </main>
  )
}