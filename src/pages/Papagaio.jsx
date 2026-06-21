import papagaio from "../assets/papagaio.png"

export default function Papagaio() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8]">

          <div className="relative">
            <img
              src={papagaio}
              alt="Papagaio"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Psitacídeo de grande porte
            </p>
            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Papagaio
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Conhecido por sua plumagem colorida, longevidade e capacidade de imitar
              a fala humana, o papagaio é um dos psitacídeos mais inteligentes e exigentes
              em termos de cuidado, espaço e estímulo mental.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-3 divide-x divide-[#E0D5C8] border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">
          {[
            { value: "40–60 anos", label: "Expectativa de vida em cativeiro" },
            { value: "300–450 g", label: "Peso adulto médio" },
            { value: "30–37 cm", label: "Comprimento total" },
          ].map(({ value, label }) => (
            <div key={label} className="px-6 py-5">
              <p className="text-2xl font-semibold text-[#2C2016] mb-0.5">{value}</p>
              <p className="text-xs text-gray-400 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-4">

        {/* Origem */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Origem</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">De onde veio a espécie</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Os papagaios do gênero <em>Amazona</em> são nativos das florestas tropicais
            da América Central e do Sul, incluindo o Brasil. Na natureza, vivem em bandos
            e ocupam o topo do dossel florestal, onde se alimentam de frutas, semente e flores.
          </p>
        </div>

        {/* Comportamento */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Comportamento</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Inteligência e vínculo</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            É uma ave extremamente inteligente, capaz de aprender palavras, sons e até
            pequenas tarefas. Forma vínculo forte com a família e pode se tornar
            ciumento ou territorial. Sem estímulo adequado, desenvolve comportamentos
            como gritos excessivos e automutilação de penas.
          </p>
        </div>

        {/* Alimentação */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Dieta equilibrada e segura</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A base da alimentação deve ser ração extrusada ou pellets formulados para
            psitacídeos de grande porte, complementada com frutas, legumes e folhas verdes
            frescas diariamente. Sementes e oleaginosas devem ser oferecidas com moderação,
            já que são calóricas e podem levar à obesidade.
          </p>
          <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3 flex gap-3">
            <span className="text-base mt-0.5">⚠️</span>
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Alimentos tóxicos:</strong> abacate, chocolate, cafeína, sal, alho,
              cebola e sementes de frutas são perigosos para papagaios e devem ser
              completamente evitados.
            </p>
          </div>
        </div>

        {/* Habitat */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Habitat</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como organizar o espaço</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Por seu grande porte e inteligência, o papagaio precisa de uma gaiola ampla
            — no mínimo 90 × 70 × 120 cm — ou de um poleiro/playground externo para
            momentos de interação fora da gaiola. Poleiros de diâmetros variados e
            brinquedos resistentes para roer são fundamentais.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Posicione o ambiente em local ventilado, com luz natural indireta, longe
            de cozinhas (vapores de teflon são letais) e de fontes constantes de
            estresse sonoro ou visual.
          </p>
        </div>

        {/* Cuidados */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Cuidados essenciais</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-4">Rotina de bem-estar</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Ofereça ração base diariamente e complemente com frutas e legumes frescos, retirando os restos em até 4 horas para evitar contaminação.",
              "Troque a água diariamente e higienize comedouros e bebedouros com água quente e sabão neutro ao menos três vezes por semana.",
              "Reserve ao menos 1 a 2 horas diárias de interação direta com a família, já que é uma ave extremamente social.",
              "Disponibilize brinquedos resistentes para roer e os rotacione com frequência para estimular o comportamento natural de mastigação.",
              "Permita períodos de voo livre ou tempo fora da gaiola em ambiente seguro e supervisionado.",
              "Leve ao veterinário especializado em aves ao menos uma vez ao ano para consultas preventivas, mesmo na ausência de sintomas visíveis.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#F5EDE0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#9C7A52]" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </section>

      <p className="max-w-[960px] mx-auto mt-6 text-center text-xs text-gray-400">
        As informações apresentadas possuem finalidade educativa e não substituem a
        orientação de um médico-veterinário especializado em aves.
      </p>

    </main>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] px-2.5 py-1 rounded mb-3">
      {children}
    </span>
  )
}
