import calopsita from "../assets/calopsita.png"

export default function Calopsita() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen">

      <section className="max-w-[1400px] mx-auto px-8 py-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={calopsita}
            alt="Calopsita"
            className="w-full rounded-3xl"
          />

          <div>

            <h1 className="text-5xl font-bold text-[#3B2F2F] mb-6">
              Calopsita
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              A calopsita é uma das aves de companhia mais populares do mundo.
              Conhecida por sua inteligência, personalidade amigável e pelo
              famoso topete, ela é uma excelente companheira para quem busca
              interação e afeto.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-[1200px] mx-auto px-8 pb-20 space-y-10">

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-4">
            📍 Origem
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A calopsita é nativa da Austrália, onde vive em áreas abertas,
            savanas e regiões semiáridas. É uma ave extremamente adaptável e
            acostumada a viver em bandos.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-4">
            🥗 Alimentação
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A base da alimentação deve ser uma ração extrusada de qualidade.
            Também podem consumir verduras, legumes e frutas adequadas para
            aves. Evite alimentos industrializados, chocolate, café e abacate.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-4">
            🏠 Habitat
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A gaiola deve ser espaçosa, possuir poleiros adequados, brinquedos
            e enriquecimento ambiental. O ambiente deve receber luz natural e
            boa ventilação.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-4">
            🧠 Comportamento
          </h2>

          <p className="text-gray-700 leading-relaxed">
            São aves sociáveis, inteligentes e curiosas. Gostam de interagir
            com seus tutores e podem aprender assobios, truques e comandos
            simples.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-4">
            ❤️ Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">

            <li>Oferecer alimentação balanceada.</li>
            <li>Disponibilizar água limpa diariamente.</li>
            <li>Garantir enriquecimento ambiental.</li>
            <li>Realizar acompanhamento veterinário.</li>
            <li>Permitir interação e exercícios fora da gaiola.</li>

          </ul>

        </div>

      </section>

    </main>
  )
}