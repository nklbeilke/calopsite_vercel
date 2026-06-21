import calopsita from "../assets/calopsita.png"

export default function Calopsita() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8]">

          <div className="relative">
            <img
              src={calopsita}
              alt="Calopsita"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <span className="absolute bottom-3 left-3 text-[11px] tracking-widest text-white/80 uppercase bg-black/20 px-2 py-1 rounded">
              
            </span>
          </div>

          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave de companhia
            </p>
            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Calopsita
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Originária das savanas australianas, a calopsita é reconhecida pelo topete característico,
              inteligência aguçada e temperamento sociável. É uma das aves de estimação mais populares
              do mundo — e uma das mais exigentes em termos de atenção e cuidado.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-3 divide-x divide-[#E0D5C8] border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">

          {[
            { value: "15–25 anos", label: "Expectativa de vida em cativeiro" },
            { value: "80–120 g",   label: "Peso adulto médio" },
            { value: "30–33 cm",   label: "Comprimento total" },
          ].map(({ value, label }) => (
            <div key={label} className="px-6 py-5">
              <p className="text-2xl font-semibold text-[#2C2016] mb-0.5">{value}</p>
              <p className="text-xs text-gray-400 leading-snug">{label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* cards  */}
      <section className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-4">

        {/*Origem*/}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag icon="">Origem</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Onde vive na natureza</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            A calopsita é endêmica da Austrália, habitando savanas, campos abertos e regiões
            semiáridas do interior do continente. Na natureza, vive em bandos numerosos e percorre
            longas distâncias em busca de água e alimento — comportamento que reflete sua necessidade
            de espaço e estimulação constante em cativeiro.
          </p>
        </div>

        {/*Comportento*/}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag icon="">Comportamento</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como ela se comunica</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            É uma ave altamente inteligente e social. Emite vocalizações variadas, pode imitar sons
            e melodias do ambiente e demonstra estados emocionais por meio da posição do topete.
            A privação de interação e estímulo pode resultar em comportamentos repetitivos e autolesivos.
          </p>
        </div>

        {/*Alimentação*/}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag icon="">Alimentação</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Dieta equilibrada e segura</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A base da alimentação deve ser composta por ração extrusada ou pellets formulados
            especificamente para psitacídeos de pequeno porte. Complementam a dieta frutas sem
            sementes, legumes e folhas verdes livres de agrotóxicos — oferecidos frescos e retirados
            após algumas horas para evitar fermentação. Disponibilize permanentemente osso de siba
            na gaiola: além de ser fonte de cálcio, auxilia na digestão por meio da moagem mecânica
            dos alimentos no papo.
          </p>
          <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3 flex gap-3">
            <span className="text-base mt-0.5"></span>
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Alimentos tóxicos:</strong> abacate, chocolate, cafeína, sal, alho, cebola e
              sementes de frutas são perigosos para calopsitas e devem ser completamente evitados.
            </p>
          </div>
        </div>

        {/*Habitat*/}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag icon="">Habitat</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como organizar o espaço</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            A gaiola deve permitir que a ave abra as asas completamente sem tocar nas grades — o
            tamanho mínimo recomendado é 60 × 40 × 80 cm para um único indivíduo. Instale poleiros
            de diâmetros variados (entre 1 e 2,5 cm), preferencialmente em galhos naturais não
            tratados, para exercitar a musculatura dos pés e prevenir artrite.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Posicione a gaiola em local com boa circulação de ar e acesso à luz solar indireta por
            ao menos algumas horas ao dia. Evite cozinhas (vapores de teflon são letais), correntes
            de ar frias e fontes de estresse como televisores em alto volume.
          </p>
        </div>

        {/* Cuidados */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag icon="">Cuidados essenciais</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-4">Rotina de bem-estar</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Ofereça ração base diariamente e complemente com frutas e legumes frescos, retirando os restos em até 4 horas para evitar contaminação.",
              "Troque a água a cada 24 horas e higienize comedouros e bebedouros com água quente e sabão neutro ao menos três vezes por semana.",
              "Permita ao menos 2 horas de voo livre diário em ambiente seguro — janelas fechadas, ventiladores desligados e espelhos sinalizados.",
              "Disponibilize brinquedos rotativos, forrageiros e espelhos para estimular comportamentos naturais e reduzir o tédio.",
              "Realize consultas preventivas com veterinário especializado em aves ao menos uma vez ao ano, independente da ausência de sintomas visíveis.",
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

      {/* nota*/}
      <p className="max-w-[960px] mx-auto mt-6 text-center text-xs text-gray-400">
        As informações acima têm caráter educativo. Consulte sempre um médico-veterinário
        especializado em aves para orientações individualizadas.
      </p>

    </main>
  )
}

function Tag({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] px-2.5 py-1 rounded mb-3">
      {icon && <span>{icon}</span>}
      {children}
    </span>
  )
}