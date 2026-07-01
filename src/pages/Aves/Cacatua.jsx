import cacatua from "../../assets/cacatua.png"

export default function Cacatua() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        {/* IMAGEM */}
        <div className="flex justify-center mb-10">
          <img
            src={cacatua}
            alt="Cacatua"
            className="max-w-[500px] w-full"
          />
        </div>

        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Cacatua
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            As cacatuas são aves extremamente inteligentes, sociáveis e
            conhecidas por sua impressionante crista de penas. Possuem grande
            capacidade de aprendizado e costumam criar fortes laços com seus
            tutores.
          </p>
        </div>

        {/* INFORMAÇÕES GERAIS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Família Cacatuidae</li>
              <li><strong>Origem:</strong> Austrália, Indonésia e Papua-Nova Guiné</li>
              <li><strong>Expectativa de vida:</strong> 40 a 70 anos</li>
              <li><strong>Tamanho:</strong> 30 a 60 cm</li>
              <li><strong>Peso:</strong> 300 g a 1 kg</li>
            </ul>
          </div>
        </section>

        {/* HABITAT */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            As cacatuas habitam florestas, savanas e áreas arborizadas da
            Oceania. Muitas espécies vivem em grandes bandos e percorrem longas
            distâncias em busca de alimento e água.
          </p>
        </section>

        {/* COMPORTAMENTO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves muito inteligentes, curiosas e afetuosas. Gostam de
            interação constante e podem desenvolver comportamentos destrutivos
            quando ficam entediadas ou passam longos períodos sozinhas.
          </p>
        </section>

        {/* ALIMENTAÇÃO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Sua alimentação deve ser baseada em rações específicas para aves de
            grande porte, complementadas com frutas, verduras e legumes
            apropriados. Água fresca e limpa deve estar sempre disponível.
          </p>
        </section>

        {/* HABITAT IDEAL */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Necessitam de viveiros amplos e resistentes, com espaço para abrir
            totalmente as asas e se movimentar confortavelmente. Poleiros
            naturais, brinquedos resistentes e atividades de enriquecimento
            ambiental são indispensáveis.
          </p>
        </section>

        {/* CUIDADOS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Oferecer interação diária.</li>
            <li>Manter brinquedos e enriquecimento ambiental.</li>
            <li>Realizar acompanhamento veterinário regularmente.</li>
            <li>Garantir alimentação equilibrada.</li>
            <li>Evitar ambientes muito barulhentos ou estressantes.</li>
          </ul>
        </section>

        {/* CURIOSIDADES */}
        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>A crista é utilizada para demonstrar emoções.</li>
            <li>Algumas espécies conseguem imitar sons e palavras.</li>
            <li>São consideradas uma das aves mais inteligentes do mundo.</li>
            <li>Podem viver por várias décadas quando recebem cuidados adequados.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}