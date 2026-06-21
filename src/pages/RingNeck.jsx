import ringneck from "../assets/ringneck.png"

export default function RingNeck() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8]">

          <div className="relative">
            <img
              src={ringneck}
              alt="Ring Neck"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Psitacídeo de médio porte
            </p>
            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Ring Neck
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              O Ring Neck, ou periquito-de-colar, é reconhecido pelo anel característico
              ao redor do pescoço dos machos adultos e pela plumagem verde vibrante.
              Inteligente e vocal, é uma ave de porte médio que exige experiência e
              dedicação por parte do tutor.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-3 divide-x divide-[#E0D5C8] border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">
          {[
            { value: "20–30 anos", label: "Expectativa de vida em cativeiro" },
            { value: "100–150 g", label: "Peso adulto médio" },
            { value: "38–42 cm", label: "Comprimento total" },
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
            Nativo de regiões da África e do sul da Ásia, o Ring Neck (<em>Psittacula krameri</em>)
            adaptou-se bem a diferentes climas e hoje é criado em cativeiro em todo o mundo,
            sendo valorizado pela inteligência e pela longevidade.
          </p>
        </div>

        {/* Comportamento */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Comportamento</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Personalidade marcante</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            É uma ave independente, territorial e bastante vocal, especialmente ao
            amanhecer e entardecer. Costuma criar vínculo forte com um tutor específico
            e pode demonstrar timidez ou desconfiança com estranhos sem socialização adequada.
          </p>
        </div>

        {/* Alimentação */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Dieta equilibrada e segura</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A base da alimentação deve ser ração extrusada ou pellets formulados para
            psitacídeos de médio porte. Frutas, legumes e folhas verdes frescas complementam
            a dieta e devem ser oferecidos diariamente, sempre retirando os restos após
            algumas horas. Sementes podem compor uma pequena parte da dieta, nunca a base.
          </p>
          <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3 flex gap-3">
            <span className="text-base mt-0.5">⚠️</span>
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Alimentos tóxicos:</strong> abacate, chocolate, cafeína, sal, alho,
              cebola e sementes de frutas são perigosos para o Ring Neck e devem ser
              completamente evitados.
            </p>
          </div>
        </div>

        {/* Habitat */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Habitat</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como organizar o espaço</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Por ser uma ave de porte médio e bastante ativa, necessita de uma gaiola ampla
            — recomenda-se no mínimo 80 × 60 × 100 cm — com poleiros de diâmetros variados
            e brinquedos resistentes, já que possui bico forte e gosta de roer.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Posicione a gaiola em ambiente ventilado, com acesso à luz natural indireta e
            longe de correntes de ar frias, cozinhas e fontes de estresse sonoro contínuo.
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
              "Disponibilize brinquedos resistentes para roer e os rotacione com frequência, já que o bico forte exige desgaste constante.",
              "Permita períodos de voo livre diário em ambiente seguro — janelas e portas fechadas e superfícies quentes sinalizadas.",
              "Realize socialização gradual e consistente, especialmente em filhotes, para reduzir a timidez e a territorialidade na vida adulta.",
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
