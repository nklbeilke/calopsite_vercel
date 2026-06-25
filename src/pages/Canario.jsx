import canario from "../assets/canario.png"

export default function Canario() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8] bg-white">

          <div className="relative">
            <img
              src={canario}
              alt="Canário"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave de companhia
            </p>

            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Canário
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              O canário é uma ave pequena, conhecida principalmente pelo canto melodioso,
              pela beleza da plumagem e pelo comportamento mais tranquilo. Muito apreciado
              por tutores de aves, exige um ambiente limpo, alimentação equilibrada e uma
              rotina adequada para manter sua saúde, disposição e qualidade vocal.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">
          {[
            { value: "Serinus canaria", label: "Nome científico" },
            { value: "Fringillidae", label: "Família" },
            { value: "8–12 anos", label: "Expectativa de vida" },
            { value: "12–15 cm", label: "Tamanho médio" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="px-5 py-5 border-b md:border-b-0 md:border-r last:border-r-0 border-[#E0D5C8]"
            >
              <p className="text-lg font-semibold text-[#2C2016] mb-1">{value}</p>
              <p className="text-xs text-gray-400 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-4">

        <Card tag="Origem" title="Onde vive na natureza">
          O canário tem origem nas Ilhas Canárias, Madeira e Açores. Na natureza,
          vive em áreas com vegetação, campos abertos, jardins e regiões próximas
          a arbustos, onde encontra sementes, brotos e pequenos alimentos naturais.
          É uma ave ativa, mas geralmente menos dependente de contato direto com o
          tutor do que psitacídeos como calopsitas e periquitos.
        </Card>

        <Card tag="Comportamento" title="Personalidade e canto">
          O canário é conhecido por seu canto, especialmente os machos, que costumam
          vocalizar com maior frequência. Possui comportamento mais independente,
          gosta de observar o ambiente e se movimentar entre os poleiros. Embora não
          seja uma ave de muito contato físico, precisa de um ambiente tranquilo,
          seguro e enriquecido para manter seu bem-estar.
        </Card>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Dieta equilibrada e segura
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A alimentação do canário deve ser composta por sementes de qualidade,
            ração própria para aves granívoras e complementos naturais em pequenas
            quantidades. Verduras, legumes e frutas seguras podem ser oferecidos
            com moderação. A água deve ser trocada diariamente para evitar
            contaminações.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <InfoBox
              title="Pode oferecer"
              items={[
                "Mistura de sementes própria para canários",
                "Ração extrusada para aves pequenas",
                "Couve, almeirão e outras folhas adequadas",
                "Cenoura e legumes seguros em pequenas porções",
                "Maçã sem sementes e frutas permitidas com moderação",
              ]}
            />

            <InfoBox
              title="Evite oferecer"
              alert
              items={[
                "Chocolate",
                "Abacate",
                "Café e bebidas com cafeína",
                "Alho e cebola",
                "Alimentos salgados ou industrializados",
                "Sementes e caroços de frutas",
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
            A gaiola do canário deve permitir movimentação confortável e pequenos
            voos entre os poleiros. Modelos mais horizontais são interessantes,
            pois favorecem deslocamentos curtos. O espaço deve contar com poleiros
            adequados, comedouro, bebedouro e local tranquilo para descanso.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            O ambiente deve ser limpo, arejado e protegido de frio intenso,
            correntes de ar, fumaça e produtos químicos. O canário também se
            beneficia de banhos em dias quentes, podendo usar uma banheira rasa
            própria para aves.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Cuidados essenciais</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-4">
            Rotina de bem-estar
          </h2>

          <ul className="flex flex-col gap-3">
            {[
              "Trocar a água diariamente e manter comedouros e bebedouros sempre higienizados.",
              "Limpar a gaiola com frequência para evitar fungos, bactérias e acúmulo de sujeira.",
              "Oferecer alimentação variada, sem excesso de sementes gordurosas.",
              "Manter a ave em local tranquilo, longe de barulhos intensos e estresse constante.",
              "Disponibilizar poleiros adequados para evitar problemas nas patas.",
              "Permitir banhos em dias quentes, sempre com água limpa e em ambiente seguro.",
              "Observar alterações no canto, nas fezes, nas penas ou no comportamento.",
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
          Um canário saudável costuma ser ativo, mantém as penas alinhadas e apresenta
          canto regular, principalmente no caso dos machos. Sinais como apatia, penas
          arrepiadas, perda de canto, dificuldade para respirar, fezes alteradas ou
          permanência no fundo da gaiola podem indicar problemas de saúde e devem ser
          avaliados por um veterinário especializado em aves.
        </Card>

        <Card tag="Curiosidades" title="Fatos sobre o canário">
          O canário é uma das aves mais conhecidas pelo canto. Os machos geralmente
          cantam mais do que as fêmeas, principalmente em períodos de maior disposição
          e bem-estar. Existem diversas variedades de canários criadas em cativeiro,
          com diferenças de cor, porte e canto.
        </Card>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Produtos recomendados</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-4">
            Itens indicados para canários
          </h2>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Misturas de sementes",
              "Rações para aves pequenas",
              "Poleiros finos naturais",
              "Gaiolas horizontais",
              "Comedouros e bebedouros",
              "Banheira para aves",
              "Petiscos naturais",
              "Suplementos com orientação veterinária",
              "Itens de higiene para gaiola",
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