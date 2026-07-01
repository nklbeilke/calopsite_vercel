import arara from "../../assets/arara.png"

export default function Arara() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={arara}
            alt="Arara"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Arara
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            As araras são aves de grande porte conhecidas por suas cores
            vibrantes, inteligência e forte capacidade de interação. São
            consideradas algumas das aves mais impressionantes da fauna
            brasileira.
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
              <li><strong>Expectativa de vida:</strong> 40 a 60 anos</li>
              <li><strong>Tamanho:</strong> 70 a 100 cm</li>
              <li><strong>Peso:</strong> 900 g a 1,5 kg</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            As araras vivem em florestas tropicais, áreas de cerrado e regiões
            próximas a rios. São aves que percorrem grandes distâncias em busca
            de alimento e costumam viver em pares ou pequenos grupos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São extremamente inteligentes, sociáveis e curiosas. Gostam de
            interagir com outras aves e com seus tutores, necessitando de
            estímulos constantes para manter a saúde física e mental.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Sua dieta deve incluir rações específicas para psitacídeos,
            complementadas com frutas, legumes e vegetais adequados para aves.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Necessitam de viveiros amplos que permitam movimentação e abertura
            total das asas. Brinquedos resistentes e poleiros naturais ajudam
            no enriquecimento ambiental.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Oferecer espaço adequado.</li>
            <li>Estimular atividades físicas.</li>
            <li>Garantir interação diária.</li>
            <li>Manter alimentação equilibrada.</li>
            <li>Realizar acompanhamento veterinário.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>São capazes de aprender sons e palavras.</li>
            <li>Possuem um dos bicos mais fortes entre as aves.</li>
            <li>Algumas espécies estão ameaçadas de extinção.</li>
            <li>Podem viver por várias décadas.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}