import calopsita from "../../assets/calopsita.png"

export default function Calopsita() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={calopsita}
            alt="Calopsita"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Calopsita
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            A calopsita é uma das aves mais queridas pelos brasileiros.
            Inteligente, carinhosa e muito companheira, ela se destaca pela
            famosa crista, personalidade amigável e facilidade de interação com
            os tutores.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Nymphicus hollandicus</li>
              <li><strong>Origem:</strong> Austrália</li>
              <li><strong>Expectativa de vida:</strong> 15 a 25 anos</li>
              <li><strong>Tamanho:</strong> 30 a 35 cm</li>
              <li><strong>Peso:</strong> 80 g a 120 g</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Na natureza, as calopsitas habitam áreas abertas da Austrália,
            próximas a rios, lagos e regiões com vegetação esparsa. Vivem em
            bandos e costumam percorrer grandes distâncias em busca de alimento
            e água.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves extremamente dóceis, inteligentes e sociáveis. Criam fortes
            laços com seus tutores, gostam de atenção e costumam demonstrar suas
            emoções através da posição da crista e vocalizações.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            A alimentação deve ter como base uma ração extrusada de qualidade,
            complementada com frutas, verduras e legumes adequados para aves.
            Uma dieta equilibrada é essencial para garantir saúde e longevidade.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            A calopsita necessita de uma gaiola espaçosa, com poleiros naturais,
            brinquedos, comedouros adequados e momentos diários de interação e
            exercícios fora da gaiola em ambiente seguro.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Oferecer enriquecimento ambiental regularmente.</li>
            <li>Garantir interação diária com a família.</li>
            <li>Manter alimentação balanceada.</li>
            <li>Evitar fumaça, perfumes e produtos tóxicos.</li>
            <li>Realizar consultas veterinárias periódicas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>A crista indica parte do estado emocional da ave.</li>
            <li>Machos costumam assobiar com mais frequência.</li>
            <li>Podem aprender sons e melodias simples.</li>
            <li>É uma das aves domésticas mais populares do Brasil.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}   