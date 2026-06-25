import calopsita from "../assets/calopsita.png"

export default function Calopsita() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8] bg-white">

          <div className="relative">
            <img
              src={calopsita}
              alt="Calopsita"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave de companhia
            </p>

            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Calopsita
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              A calopsita é uma ave originária da Austrália e uma das espécies de companhia
              mais populares do mundo. Conhecida pelo topete característico, pelas bochechas
              alaranjadas e pelo comportamento dócil, destaca-se por sua inteligência,
              curiosidade e facilidade em criar vínculo com os tutores. Quando recebe atenção,
              alimentação adequada e um ambiente enriquecido, pode viver por muitos anos com
              excelente qualidade de vida.
            </p>
          </div>

        </div>
      </section>

      {/* Informações rápidas */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">

          {[
            { value: "Nymphicus hollandicus", label: "Nome científico" },
            { value: "Cacatuidae", label: "Família" },
            { value: "15–25 anos", label: "Expectativa de vida" },
            { value: "30–33 cm", label: "Tamanho médio" },
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
          A calopsita é nativa da Austrália, onde vive principalmente em regiões abertas,
          savanas, campos e áreas semiáridas. Na natureza, costuma formar bandos e se
          deslocar em busca de água, sementes e vegetação. Esse comportamento mostra a
          importância de oferecer espaço, interação e estímulos quando criada em ambiente
          doméstico.
        </Card>

        <Card tag="Comportamento" title="Personalidade e comunicação">
          É uma ave sociável, curiosa e bastante inteligente. Pode aprender assobios,
          reconhecer a rotina da casa e criar forte vínculo com o tutor. A posição do
          topete também ajuda a indicar seu estado emocional: levantado pode demonstrar
          curiosidade ou animação, enquanto abaixado pode indicar medo, irritação ou
          insegurança.
        </Card>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Dieta equilibrada e segura
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A alimentação da calopsita deve ser balanceada e variada. A base ideal pode
            incluir ração extrusada própria para psitacídeos, complementada com sementes
            em quantidade controlada, verduras, legumes e algumas frutas adequadas. A água
            deve estar sempre limpa e disponível. Mudanças na dieta devem ser feitas de
            forma gradual e, quando possível, com orientação de um veterinário especializado
            em aves.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <InfoBox
              title="Pode oferecer"
              items={[
                "Ração extrusada própria para aves",
                "Mistura de sementes de qualidade, com moderação",
                "Couve, brócolis, rúcula e folhas verdes adequadas",
                "Cenoura, abobrinha, pepino e outros legumes seguros",
                "Maçã sem sementes, mamão, goiaba e banana em pequenas quantidades",
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
                "Alimentos muito salgados, gordurosos ou industrializados",
                "Sementes de maçã e de outras frutas",
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
            A gaiola deve ser espaçosa o suficiente para que a ave consiga se mover com
            conforto, abrir as asas e acessar poleiros, comedouro e bebedouro sem
            dificuldade. Quanto maior o espaço disponível, melhor será para o bem-estar
            da calopsita.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            O ambiente deve contar com poleiros naturais de diferentes espessuras,
            brinquedos, escadas, balanços e itens de enriquecimento ambiental. A gaiola
            deve ficar em local arejado, seguro, sem corrente de ar intensa, longe de
            fumaça, produtos químicos e temperaturas extremas. Sempre que possível, a ave
            deve ter momentos de voo supervisionado em um ambiente seguro.
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
              "Higienizar a gaiola com frequência para evitar acúmulo de sujeira, fungos e bactérias.",
              "Oferecer brinquedos e estímulos para evitar tédio, estresse e comportamentos repetitivos.",
              "Permitir momentos de interação e voo supervisionado em ambiente seguro.",
              "Evitar correntes de ar, fumaça, produtos químicos e mudanças bruscas de temperatura.",
              "Oferecer banhos em dias quentes, sempre sem uso de shampoos ou produtos químicos.",
              "Realizar acompanhamento com veterinário especializado em aves.",
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
          Embora seja uma ave resistente, a calopsita pode apresentar problemas
          respiratórios, parasitas, deficiência nutricional, obesidade e doenças
          infecciosas quando não recebe os cuidados adequados. Sinais como apatia,
          perda de apetite, penas arrepiadas, secreção nasal, dificuldade para respirar,
          diarreia ou permanência no fundo da gaiola indicam necessidade de avaliação
          veterinária.
        </Card>

        <Card tag="Curiosidades" title="Fatos sobre a calopsita">
          A calopsita é considerada o menor membro da família das cacatuas. Ela consegue
          reconhecer pessoas, aprender assobios, memorizar melodias e demonstrar emoções
          pela postura corporal e pela posição da crista. Na natureza, vive em bandos, por
          isso precisa de interação frequente para não se sentir isolada.
        </Card>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Produtos recomendados</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-4">
            Itens indicados para calopsitas
          </h2>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Rações extrusadas",
              "Misturas de sementes",
              "Poleiros naturais",
              "Brinquedos interativos",
              "Balanços e escadas",
              "Gaiolas espaçosas",
              "Comedouros e bebedouros",
              "Petiscos naturais",
              "Suplementos com orientação veterinária",
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