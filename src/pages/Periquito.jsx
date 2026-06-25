import periquito from "../assets/periquito.png"

export default function Periquito() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8] bg-white">

          <div className="relative">
            <img
              src={periquito}
              alt="Periquito Australiano"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave de companhia
            </p>

            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Periquito Australiano
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              O periquito australiano é uma ave pequena, colorida e muito comunicativa,
              conhecida por sua energia, inteligência e facilidade de adaptação ao convívio
              com humanos. Originário da Austrália, vive naturalmente em bandos e possui
              comportamento social bastante ativo. Quando recebe alimentação adequada,
              espaço para se movimentar e estímulos diários, torna-se uma excelente ave
              de companhia.
            </p>
          </div>

        </div>
      </section>

      {/* Informações rápidas */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">

          {[
            { value: "Melopsittacus undulatus", label: "Nome científico" },
            { value: "Psittaculidae", label: "Família" },
            { value: "7–15 anos", label: "Expectativa de vida" },
            { value: "17–20 cm", label: "Tamanho médio" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="px-5 py-5 border-b md:border-b-0 md:border-r last:border-r-0 border-[#E0D5C8]"
            >
              <p className="text-lg font-semibold text-[#2C2016] mb-1">
                {value}
              </p>
              <p className="text-xs text-gray-400 leading-snug">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-4">

        <Card tag="Origem" title="Onde vive na natureza">
          O periquito australiano é nativo da Austrália, onde habita regiões abertas,
          campos, savanas e áreas com disponibilidade de sementes e água. Na natureza,
          costuma viver em grandes bandos e pode se deslocar por longas distâncias em
          busca de alimento. Esse comportamento mostra que é uma ave ativa, social e
          que precisa de estímulos mesmo quando criada em ambiente doméstico.
        </Card>

        <Card tag="Comportamento" title="Personalidade e comunicação">
          É uma ave curiosa, comunicativa e cheia de energia. Gosta de explorar o
          ambiente, interagir com outros periquitos e brincar com objetos variados.
          Quando bem socializado, pode criar vínculo com o tutor, reconhecer rotinas
          e aprender assobios ou sons simples. Por viver naturalmente em grupos, não
          deve permanecer isolado ou sem estímulos por longos períodos.
        </Card>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Dieta equilibrada e segura
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A alimentação do periquito australiano deve ser variada e equilibrada.
            A base pode incluir ração própria para aves e sementes de qualidade,
            sempre com moderação para evitar excesso de gordura. Verduras, legumes
            e algumas frutas também podem complementar a dieta, desde que sejam
            seguros para aves e oferecidos frescos. A água deve estar sempre limpa
            e disponível.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <InfoBox
              title="Pode oferecer"
              items={[
                "Ração própria para aves",
                "Mistura de sementes de qualidade, com moderação",
                "Couve, chicória, rúcula e folhas verdes adequadas",
                "Cenoura, abobrinha e outros legumes seguros",
                "Maçã sem sementes, banana e outras frutas em pequenas quantidades",
              ]}
            />

            <InfoBox
              title="Evite oferecer"
              alert
              items={[
                "Chocolate",
                "Abacate",
                "Café, chá e bebidas com cafeína",
                "Alho e cebola",
                "Alimentos muito salgados ou industrializados",
                "Sementes de maçã e caroços de frutas",
              ]}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Habitat</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Como organizar o espaço
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            O periquito australiano precisa de uma gaiola espaçosa, preferencialmente
            mais larga do que alta, para permitir pequenos voos e movimentação confortável.
            O espaço deve conter poleiros de diferentes espessuras, comedouro, bebedouro,
            brinquedos e acessórios que estimulem a atividade física e mental.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            A gaiola deve ficar em local arejado, seguro e com boa iluminação natural,
            evitando correntes de ar, fumaça, produtos químicos e temperaturas extremas.
            Sempre que possível, é recomendado permitir momentos de voo supervisionado
            em ambiente fechado e seguro.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Cuidados essenciais</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-4">
            Rotina de bem-estar
          </h2>

          <ul className="flex flex-col gap-3">
            {[
              "Trocar a água diariamente e manter comedouros e bebedouros sempre limpos.",
              "Higienizar a gaiola com frequência para evitar acúmulo de sujeira e bactérias.",
              "Oferecer brinquedos, escadas, balanços e itens de enriquecimento ambiental.",
              "Evitar que a ave fique sozinha por longos períodos sem interação ou estímulos.",
              "Permitir exercícios e pequenos voos supervisionados em ambiente seguro.",
              "Manter a alimentação equilibrada, evitando dietas baseadas apenas em sementes.",
              "Realizar acompanhamento com veterinário especializado em aves quando necessário.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#F5EDE0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#9C7A52]"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 6l3 3 5-5"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Card tag="Saúde" title="Sinais de atenção">
          Um periquito saudável costuma ser ativo, curioso, vocaliza com frequência
          e apresenta penas limpas e bem alinhadas. Mudanças como apatia, penas
          arrepiadas, perda de apetite, diarreia, dificuldade para respirar ou permanência
          no fundo da gaiola podem indicar problemas de saúde e exigem avaliação de um
          veterinário especializado em aves.
        </Card>

        <Card tag="Curiosidades" title="Fatos sobre o periquito">
          O periquito australiano é uma das aves de companhia mais populares do mundo.
          Na natureza, vive em grandes bandos e se comunica por meio de sons variados.
          Também existem diversas mutações de cores criadas em cativeiro, como azul,
          verde, amarelo, branco e violeta. Apesar do tamanho pequeno, é uma ave muito
          inteligente e precisa de estímulos diários.
        </Card>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Produtos recomendados</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-4">
            Itens indicados para periquitos
          </h2>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Rações para aves pequenas",
              "Misturas de sementes",
              "Poleiros finos naturais",
              "Brinquedos coloridos",
              "Balanços e escadas",
              "Gaiolas horizontais",
              "Comedouros e bebedouros",
              "Petiscos naturais",
              "Itens de enriquecimento ambiental",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#F5EDE0] text-[#7A5C34] text-xs font-medium rounded-xl px-4 py-3 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </section>

      <p className="max-w-[960px] mx-auto mt-6 text-center text-xs text-gray-400">
        As informações acima têm caráter educativo. Consulte sempre um médico-veterinário
        especializado em aves para orientações individualizadas.
      </p>

    </main>
  )
}

function Card({ tag, title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
      <Tag>{tag}</Tag>

      <h2 className="text-base font-semibold text-[#2C2016] mb-2">
        {title}
      </h2>

      <p className="text-sm text-gray-500 leading-relaxed">
        {children}
      </p>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] px-2.5 py-1 rounded mb-3">
      {children}
    </span>
  )
}

function InfoBox({ title, items, alert = false }) {
  return (
    <div
      className={`
        rounded-xl px-4 py-4 border
        ${alert
          ? "bg-[#FFF0EA] border-[#F0B8A0]"
          : "bg-[#F4F8EC] border-[#C9D8A8]"
        }
      `}
    >
      <h3 className="text-sm font-semibold text-[#2C2016] mb-3">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-xs text-gray-500 leading-relaxed">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  )
}