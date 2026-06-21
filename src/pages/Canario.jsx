import canario from "../assets/canario.png"

export default function Canario() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen py-12 px-4">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E0D5C8]">

          <div className="relative">
            <img
              src={canario}
              alt="Canário"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2">
              Ave canora
            </p>

            <h1 className="text-4xl font-semibold text-[#2C2016] mb-4 leading-tight">
              Canário
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              O canário é uma das aves ornamentais mais populares do mundo,
              conhecido principalmente pelo canto melodioso e pela beleza de
              sua plumagem. De temperamento tranquilo e fácil adaptação ao
              ambiente doméstico, é uma excelente opção para quem aprecia
              pássaros cantores.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto mb-8">
        <div className="grid grid-cols-3 divide-x divide-[#E0D5C8] border border-[#E0D5C8] rounded-2xl overflow-hidden bg-white">

          {[
            { value: "10–15 anos", label: "Expectativa de vida" },
            { value: "15–30 g", label: "Peso adulto médio" },
            { value: "11–13 cm", label: "Comprimento total" },
          ].map(({ value, label }) => (
            <div key={label} className="px-6 py-5">
              <p className="text-2xl font-semibold text-[#2C2016] mb-0.5">
                {value}
              </p>
              <p className="text-xs text-gray-400 leading-snug">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Cards */}
      <section className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-4">

        {/* Origem */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Origem</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            De onde veio a espécie
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            O canário doméstico descende do canário-do-reino, uma ave nativa
            das Ilhas Canárias, Madeira e Açores. Ao longo dos séculos foi
            selecionado por criadores para desenvolver diferentes cores,
            formatos corporais e padrões de canto.
          </p>
        </div>

        {/* Comportamento */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
          <Tag>Comportamento</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Personalidade e canto
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            Os canários são aves tranquilas, observadoras e independentes.
            Os machos são conhecidos por emitir cantos elaborados para
            comunicação e atração de parceiras. Diferentemente das
            calopsitas, costumam apreciar mais a observação do que o contato
            físico direto com humanos.
          </p>
        </div>

        {/* Alimentacao*/}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Alimentação</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Nutrição adequada
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A alimentação deve ser baseada em uma mistura de sementes de
            qualidade associada à ração extrusada específica para aves.
            Frutas, verduras e legumes podem complementar a dieta,
            fornecendo vitaminas e minerais essenciais para a manutenção da
            saúde e da qualidade das penas.
          </p>

          <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3">
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Atenção:</strong> evite oferecer chocolate, café,
              bebidas alcoólicas, alimentos muito salgados ou açucarados,
              pois podem causar sérios problemas de saúde.
            </p>
          </div>
        </div>

        {/*Habitat*/}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Habitat</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-2">
            Ambiente ideal
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            O canário deve viver em uma gaiola espaçosa, limpa e bem
            ventilada. Apesar do tamanho reduzido, necessita de espaço para
            realizar pequenos voos e manter o condicionamento físico.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            O ambiente deve receber iluminação natural indireta e ser
            protegido de correntes de ar e mudanças bruscas de temperatura.
            Poleiros adequados e uma rotina regular de limpeza são
            fundamentais para o bem-estar da ave.
          </p>
        </div>

        {/* Cuidados */}
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:col-span-2">
          <Tag>Cuidados essenciais</Tag>

          <h2 className="text-base font-semibold text-[#2C2016] mb-4">
            Rotina de bem-estar
          </h2>

          <ul className="flex flex-col gap-3">

            {[
              "Troque a água diariamente e mantenha os recipientes limpos.",
              "Forneça alimentação variada e balanceada.",
              "Mantenha a gaiola higienizada regularmente.",
              "Garanta iluminação natural indireta e boa ventilação.",
              "Observe alterações no canto, comportamento ou apetite.",
              "Realize acompanhamento veterinário preventivo.",
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

      </section>

      <p className="max-w-[960px] mx-auto mt-6 text-center text-xs text-gray-400">
        As informações apresentadas possuem finalidade educativa e não
        substituem a orientação de um médico-veterinário especializado em aves.
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

