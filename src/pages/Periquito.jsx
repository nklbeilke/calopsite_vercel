import periquito from "../assets/periquito.png"

export default function Periquito() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8]">

          <div className="relative">
            <img
              src={periquito}
              alt="Periquito"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave de companhia
            </p>
            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Periquito
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pequeno, colorido e incansavelmente sociável, o periquito-australiano
              é uma das aves domésticas mais populares do mundo. Sua inteligência,
              facilidade de adaptação e vocalização expressiva fazem dele um
              companheiro animado — e responsável.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-3 divide-x divide-[#E0D5C8] border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">
          {[
            { value: "5–10 anos",  label: "Expectativa de vida em cativeiro" },
            { value: "25–35 g",    label: "Peso adulto médio" },
            { value: "18–20 cm",   label: "Comprimento total" },
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
            O periquito-australiano (<em>Melopsittacus undulatus</em>) é nativo da Austrália,
            onde habita campos abertos, savanas e regiões semiáridas do interior. Vive em
            bandos que podem reunir centenas de indivíduos, o que explica sua forte necessidade
            de companhia e interação social em cativeiro.
          </p>
        </div>

        {/* Comportamento */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Comportamento</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como ele se expressa</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            São aves alegres, curiosas e muito comunicativas. Emitem sons variados ao longo
            do dia e podem aprender a imitar palavras e melodias com treino e paciência.
            Periquitos solitários tendem a ficar estressados — idealmente devem viver em
            pares ou pequenos grupos.
          </p>
        </div>

        {/* Alimentação */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Dieta equilibrada e segura</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A base da dieta deve ser composta por ração extrusada ou pellets formulados para
            psitacídeos de pequeno porte, garantindo aporte nutricional completo. Sementes podem
            ser oferecidas em menor quantidade como complemento — não como alimento principal,
            pois são ricas em gordura e pobres em vitaminas. Frutas sem sementes, legumes e
            verduras frescas sem agrotóxicos enriquecem a alimentação e estimulam o
            comportamento exploratório. Retire os alimentos frescos após 3 a 4 horas para evitar
            fermentação. Disponibilize osso de siba permanentemente para suprir cálcio e auxiliar
            na digestão.
          </p>
          <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3 flex gap-3">
            <span className="text-base mt-0.5">⚠️</span>
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Alimentos tóxicos:</strong> abacate, chocolate, cafeína, sal, alho, cebola,
              sementes de maçã e pera são perigosos para periquitos e devem ser completamente evitados.
            </p>
          </div>
        </div>

        {/* Habitat */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Habitat</Tag>
          <h2 className="text-base font-semibold text-[#2C2016] mb-2">Como organizar o espaço</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            A gaiola deve ser ampla o suficiente para que a ave voe horizontalmente dentro dela —
            o tamanho mínimo recomendado para um par é 60 × 40 × 50 cm. Prefira gaiolas mais
            largas do que altas, pois periquitos se movem principalmente no plano horizontal.
            Instale poleiros de diâmetros variados (0,8 a 1,5 cm), preferencialmente em galhos
            naturais não tratados, para exercitar os pés e prevenir problemas articulares.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Posicione a gaiola em ambiente bem ventilado, com acesso à luz solar indireta, longe
            de correntes de ar frias, cozinhas (vapores de teflon são letais) e fontes de ruído
            intenso e contínuo.
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
              "Permita períodos de voo livre diário em ambiente seguro — janelas e portas fechadas, ventiladores desligados e superfícies quentes sinalizadas.",
              "Disponibilize brinquedos variados e os rotacione semanalmente para manter o estímulo mental e evitar o tédio.",
              "Evite manter o periquito sozinho: prefira criá-lo em pares ou grupos, pois o isolamento causa estresse crônico e reduz a qualidade de vida.",
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

      {/* Footer*/}
      <p className="max-w-[960px] mx-auto mt-6 text-center text-xs text-gray-400">
        As informações acima têm caráter educativo. Consulte sempre um médico-veterinário
        especializado em aves para orientações individualizadas.
      </p>

    </main>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] px-2.5 py-1 rounded mb-3">
      {children}
    </span>
  )
}