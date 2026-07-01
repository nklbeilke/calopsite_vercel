import papagaio from "../../assets/papagaio.png"

export default function Papagaio() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={papagaio}
            alt="Papagaio"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Papagaio
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            Os papagaios são aves inteligentes, sociáveis e muito conhecidas
            pela capacidade de imitar sons e palavras. São animais que precisam
            de atenção, estímulos e cuidados constantes.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Família Psittacidae</li>
              <li><strong>Origem:</strong> América Central e América do Sul</li>
              <li><strong>Expectativa de vida:</strong> 30 a 60 anos</li>
              <li><strong>Tamanho:</strong> 30 a 40 cm</li>
              <li><strong>Peso:</strong> 300 g a 600 g</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Vivem principalmente em florestas tropicais, áreas arborizadas e
            regiões de mata. Costumam se deslocar em grupos e utilizam árvores
            para descanso, alimentação e reprodução.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves curiosas, comunicativas e muito inteligentes. Gostam de
            interagir, explorar o ambiente e podem criar vínculos fortes com os
            tutores quando recebem cuidado adequado.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            A alimentação deve ser equilibrada, com ração específica para
            psitacídeos, frutas, legumes e verduras seguras. Sementes podem ser
            oferecidas com moderação.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            O papagaio precisa de uma gaiola ou viveiro espaçoso, com poleiros
            naturais, brinquedos resistentes e espaço para se movimentar com
            conforto e segurança.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Oferecer interação diária.</li>
            <li>Manter brinquedos para enriquecimento ambiental.</li>
            <li>Garantir alimentação equilibrada.</li>
            <li>Evitar isolamento por longos períodos.</li>
            <li>Realizar acompanhamento veterinário especializado.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Podem imitar sons, assobios e palavras.</li>
            <li>São aves muito inteligentes e observadoras.</li>
            <li>Precisam de estímulos para evitar tédio e estresse.</li>
            <li>Podem viver por várias décadas com cuidados adequados.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}