import periquito from "../../assets/periquito.png"

export default function Periquito() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={periquito}
            alt="Periquito"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Periquito
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            O periquito-australiano é uma das aves de estimação mais populares
            do mundo. Inteligente, sociável e cheio de energia, conquista seus
            tutores pela facilidade de interação e pelas diversas cores de sua
            plumagem.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Melopsittacus undulatus</li>
              <li><strong>Origem:</strong> Austrália</li>
              <li><strong>Expectativa de vida:</strong> 8 a 15 anos</li>
              <li><strong>Tamanho:</strong> 18 a 22 cm</li>
              <li><strong>Peso:</strong> 30 g a 40 g</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Os periquitos vivem naturalmente em regiões áridas e semiáridas da
            Austrália. Formam grandes bandos e percorrem longas distâncias em
            busca de água e alimento.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves extremamente sociáveis e ativas. Gostam de brincar,
            explorar o ambiente e interagir com outros periquitos ou com seus
            tutores. Quando treinados, podem aprender sons e pequenas palavras.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            A base da alimentação deve ser uma ração de qualidade específica
            para psitacídeos de pequeno porte. Frutas, verduras e legumes podem
            complementar a dieta de forma equilibrada.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            O ideal é uma gaiola ampla que permita pequenos voos, equipada com
            poleiros de diferentes espessuras, brinquedos e áreas para
            enriquecimento ambiental.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Oferecer brinquedos para estímulo mental.</li>
            <li>Manter água limpa diariamente.</li>
            <li>Garantir espaço para exercícios.</li>
            <li>Evitar correntes de ar e temperaturas extremas.</li>
            <li>Realizar acompanhamento veterinário periódico.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>É uma das aves de estimação mais populares do planeta.</li>
            <li>Pode aprender a reproduzir sons e palavras.</li>
            <li>Existem dezenas de mutações de cores.</li>
            <li>São aves que gostam muito de companhia.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}