import agapornis from "../assets/agapornis.png"

export default function Agapornis() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8]">

          <div className="relative">
            <img
              src={agapornis}
              alt="Agapornis"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave de companhia
            </p>
            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Agapornis
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Conhecido popularmente como "pássaro do amor", o agapornis é uma pequena
              ave de plumagem colorida e personalidade intensa. Forma vínculos fortes
              com seu par ou tutor e exige atenção constante para um desenvolvimento
              emocional saudável.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-3 divide-x divide-[#E0D5C8] border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">
          {[
            { value: "10–15 anos", label: "Expectativa de vida em cativeiro" },
            { value: "40–60 g", label: "Peso adulto médio" },
            { value: "13–17 cm", label: "Comprimento total" },
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
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Onde vive na natureza</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            O gênero <em>Agapornis</em> é nativo de regiões da África e de Madagascar,
            onde habita savanas, florestas abertas e áreas próximas a rios. Na natureza,
            vive em pequenos bandos e forma pares duradouros, comportamento que dá
            origem ao apelido "inseparável".
          </p>
        </div>

        {/* Comportamento */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Comportamento</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como ele se relaciona</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            É uma ave enérgica, ciumenta e muito ligada ao parceiro ou tutor. Vocaliza
            de forma intensa e pode demonstrar comportamentos territoriais. Quando criado
            sozinho, precisa de interação humana diária para não desenvolver ansiedade.
          </p>
        </div>

        {/* Alimentação */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Dieta equilibrada e segura</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A base da alimentação deve ser ração extrusada ou pellets formulados para
            psitacídeos de pequeno porte. Frutas sem sementes, legumes e folhas verdes
            frescas complementam a dieta e devem ser retirados após algumas horas para
            evitar fermentação. Disponibilize osso de siba permanentemente como fonte de cálcio.
          </p>
          <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3 flex gap-3">
            <span className="text-base mt-0.5">⚠️</span>
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Alimentos tóxicos:</strong> abacate, chocolate, cafeína, sal, alho,
              cebola e sementes de frutas são perigosos para agapornis e devem ser
              completamente evitados.
            </p>
          </div>
        </div>

        {/* Habitat */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Habitat</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como organizar o espaço</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            A gaiola deve ter no mínimo 50 × 40 × 60 cm para um par, com espaço suficiente
            para voos curtos e poleiros de diâmetros variados. Por serem aves curiosas e
            ativas, brinquedos para roer e explorar são essenciais para o bem-estar.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Posicione a gaiola em ambiente bem ventilado, com luz natural indireta, longe
            de correntes de ar frias, cozinhas (vapores de teflon são letais) e ruídos
            intensos contínuos.
          </p>
        </div>

        {/* Cuidados */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Cuidados essenciais</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-4">Rotina de bem-estar</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Ofereça ração base diariamente e complemente com frutas e legumes frescos, retirando os restos em até 4 horas para evitar contaminação.",
              "Troque a água todos os dias e higienize comedouros e bebedouros com água quente e sabão neutro ao menos três vezes por semana.",
              "Evite manter o agapornis sozinho por longos períodos: prefira criá-lo em pares ou ofereça interação humana diária constante.",
              "Disponibilize brinquedos variados e os rotacione semanalmente para manter o estímulo mental e evitar comportamentos destrutivos.",
              "Permita períodos de voo livre diário em ambiente seguro — janelas e portas fechadas e ventiladores desligados.",
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
