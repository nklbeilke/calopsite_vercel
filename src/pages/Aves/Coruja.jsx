import coruja from "../../assets/coruja.png"

export default function Coruja() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={coruja}
            alt="Coruja"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">  
            Coruja
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            As corujas são aves de rapina conhecidas por sua excelente visão,
            audição aguçada e hábitos predominantemente noturnos.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Ordem Strigiformes</li>
              <li><strong>Origem:</strong> Encontradas em praticamente todo o mundo</li>
              <li><strong>Expectativa de vida:</strong> 10 a 30 anos</li>
              <li><strong>Tamanho:</strong> 15 a 75 cm</li>
              <li><strong>Peso:</strong> varia conforme a espécie</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Vivem em florestas, campos, áreas rurais e até regiões urbanas,
            dependendo da espécie.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves discretas e silenciosas, adaptadas para caça noturna.
            Possuem audição extremamente desenvolvida e voo muito silencioso.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Alimentam-se principalmente de pequenos mamíferos, insetos,
            anfíbios e outras presas compatíveis com seu porte.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Corujas possuem necessidades específicas e geralmente não são
            consideradas aves domésticas comuns. Muitas espécies exigem
            autorizações e manejo especializado.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Respeitar a legislação ambiental.</li>
            <li>Fornecer alimentação adequada.</li>
            <li>Garantir ambiente tranquilo.</li>
            <li>Buscar acompanhamento especializado.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Conseguem girar a cabeça em até 270 graus.</li>
            <li>Seu voo é extremamente silencioso.</li>
            <li>Possuem excelente visão noturna.</li>
            <li>São símbolos de sabedoria em diversas culturas.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}