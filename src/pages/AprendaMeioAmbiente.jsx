
export default function AprendaMeioAmbiente() {
  const temas = [
    {
      titulo: "A Importância das Aves para o Meio Ambiente",
      texto:
        "As aves desempenham funções essenciais para o equilíbrio dos ecossistemas. Muitas espécies ajudam no controle de insetos, evitando a proliferação de pragas que poderiam prejudicar plantações e florestas. Outras participam da polinização de flores e da dispersão de sementes, contribuindo para a regeneração natural da vegetação. Além disso, a presença ou ausência de determinadas aves pode indicar a qualidade ambiental de uma região."
    },
    {
      titulo: "Calopsitas na Natureza",
      texto:
        "As calopsitas são aves originárias da Austrália e habitam áreas abertas, savanas e regiões semiáridas. Na natureza, vivem em bandos e percorrem grandes distâncias em busca de água e alimento. Sua movimentação auxilia na dispersão de sementes, contribuindo para a renovação da vegetação local. Embora sejam muito populares como animais de companhia, suas populações naturais dependem da preservação dos ambientes onde vivem."
    },
    {
      titulo: "Canários e a Biodiversidade",
      texto:
        "Os canários descendem do canário-do-reino, encontrado originalmente nas Ilhas Canárias, Madeira e Açores. Essas aves fazem parte da biodiversidade desses arquipélagos e desempenham um papel importante na dispersão de sementes. Seu famoso canto é utilizado para comunicação, demarcação de território e atração de parceiros durante o período reprodutivo."
    },
    {
      titulo: "Biodiversidade",
      texto:
        "Biodiversidade é a variedade de formas de vida existentes em um ambiente. Ela inclui animais, plantas, fungos e microrganismos. Quanto maior a biodiversidade, mais equilibrado e resistente é o ecossistema. A perda de espécies pode causar impactos significativos em toda a cadeia alimentar e comprometer diversos serviços ambientais importantes para a vida humana."
    },
    {
      titulo: "Preservação dos Habitats",
      texto:
        "Os habitats naturais fornecem alimento, abrigo e locais de reprodução para as aves. O desmatamento, as queimadas, a urbanização descontrolada e a poluição reduzem esses espaços, colocando diversas espécies em risco. A preservação de florestas, campos, manguezais e outras áreas naturais é fundamental para garantir a sobrevivência das aves e a manutenção dos ecossistemas."
    },
    {
      titulo: "Tráfico de Animais Silvestres",
      texto:
        "O tráfico de animais silvestres é considerado um dos maiores crimes ambientais do mundo. Milhares de aves são retiradas ilegalmente da natureza todos os anos para serem comercializadas. Muitas não sobrevivem ao transporte devido às condições inadequadas. Além de causar sofrimento aos animais, essa prática reduz populações naturais e prejudica o equilíbrio ecológico."
    },
    {
      titulo: "Mudanças Climáticas",
      texto:
        "As mudanças climáticas afetam diretamente diversas espécies de aves. Alterações na temperatura, períodos de seca prolongados, eventos climáticos extremos e mudanças na disponibilidade de alimento podem impactar a sobrevivência e a reprodução desses animais. Muitas espécies precisam modificar suas rotas migratórias ou buscar novos habitats para sobreviver."
    },
    {
      titulo: "Ações Sustentáveis",
      texto:
        "Pequenas atitudes podem contribuir para a preservação do meio ambiente. Economizar água, reduzir a produção de resíduos, reciclar materiais, plantar árvores nativas e apoiar projetos de conservação são exemplos de ações que ajudam a proteger a fauna e a flora. A educação ambiental também desempenha um papel fundamental na conscientização da sociedade."
    },
    {
      titulo: "Biomas Brasileiros e suas Aves",
      texto:
        "O Brasil abriga biomas únicos, como a Amazônia, o Cerrado, a Mata Atlântica, a Caatinga, o Pantanal e os Pampas, cada um com espécies de aves adaptadas às suas características específicas. A Amazônia concentra a maior diversidade de aves do planeta, enquanto o Cerrado é lar de espécies endêmicas que não existem em nenhum outro lugar do mundo. Conhecer esses biomas ajuda a entender a importância de preservar cada um deles."
    },
    {
      titulo: "Aves Migratórias",
      texto:
        "Muitas espécies de aves realizam grandes migrações sazonais, percorrendo milhares de quilômetros entre áreas de reprodução e alimentação. Esses deslocamentos dependem da preservação de rotas de descanso e de ecossistemas saudáveis ao longo do trajeto. Alterações climáticas e a destruição de habitats intermediários podem comprometer essas jornadas e ameaçar a sobrevivência de populações inteiras."
    },
    {
      titulo: "Espécies Ameaçadas de Extinção",
      texto:
        "Diversas espécies de aves brasileiras, como a arara-azul-de-lear e o mutum-do-nordeste, estão na lista de animais ameaçados de extinção. As principais causas incluem desmatamento, caça ilegal, tráfico de animais e perda de habitat. Programas de reprodução em cativeiro, fiscalização ambiental e reflorestamento são algumas das estratégias usadas para reverter esse cenário."
    },
    {
      titulo: "Reciclagem e Compostagem no Dia a Dia",
      texto:
        "Separar corretamente o lixo doméstico e destinar resíduos orgânicos para compostagem são hábitos simples que reduzem a quantidade de material enviado a aterros e diminuem a poluição do solo e da água. Restos de frutas, verduras e cascas de sementes usadas na alimentação das aves também podem ser compostados, transformando resíduos em adubo natural para plantas e jardins."
    },
    {
      titulo: "Unidades de Conservação e Áreas Protegidas",
      texto:
        "Parques nacionais, reservas biológicas e áreas de proteção ambiental são fundamentais para garantir espaços livres de desmatamento e caça, permitindo que populações de aves se reproduzam e mantenham a diversidade genética. Visitar essas áreas de forma consciente e apoiar organizações de conservação são formas diretas de contribuir para a proteção da fauna silvestre."
    }
  ];

  return (
    <main className="bg-[#FFF7EA] min-h-screen py-12 px-4">
      {/* Hero */}
      <section className="max-w-[1100px] mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-[0.25em] text-[#9C7A52] mb-3">
          Educação Ambiental
        </p>

        <h1 className="text-5xl font-semibold text-[#2C2016] mb-6">
          Aprenda Sobre o Meio Ambiente
        </h1>

        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-[#D4A373] to-[#E9C46A] rounded-full mb-6"></div>

        <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed">
          O meio ambiente é formado pela interação entre seres vivos,
          recursos naturais e fatores físicos que tornam a vida possível
          em nosso planeta. Conhecer a importância das aves e compreender
          os desafios enfrentados pela natureza é fundamental para a
          construção de uma sociedade mais sustentável e consciente.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6">
        {temas.map((tema) => (
          <article
            key={tema.titulo}
            className="bg-white rounded-2xl border border-[#E0D5C8] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="inline-flex items-center text-[11px] uppercase tracking-wider text-[#7A5C34] bg-[#F5EDE0] px-3 py-1 rounded mb-4">
              Educação Ambiental
            </span>

            <h2 className="text-xl font-semibold text-[#2C2016] mb-3">
              {tema.titulo}
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#D4A373] to-[#E9C46A] rounded-full mb-4"></div>

            <p className="text-sm text-gray-500 leading-relaxed">
              {tema.texto}
            </p>
          </article>
        ))}
      </section>

      {/* Curiosidades */}
      <section className="max-w-[1100px] mx-auto mt-10">
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2C2016] mb-3">
            Curiosidades Sobre as Aves
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#D4A373] to-[#E9C46A] rounded-full mb-5"></div>

          <ul className="space-y-4 text-gray-500">
            <li>
              Existem mais de 10.000 espécies de aves distribuídas pelo mundo.
            </li>

            <li>
              O Brasil está entre os países com maior diversidade de aves do planeta.
            </li>

            <li>
              Algumas espécies conseguem enxergar cores invisíveis para os seres humanos.
            </li>

            <li>
              As penas auxiliam no voo, isolamento térmico e comunicação.
            </li>

            <li>
              Muitas plantas dependem das aves para dispersar suas sementes.
            </li>

            <li>
              As aves são consideradas excelentes indicadoras da qualidade ambiental.
            </li>

            <li>
              A Amazônia sozinha abriga mais de 1.300 espécies de aves catalogadas.
            </li>

            <li>
              Algumas espécies migratórias percorrem mais de 10 mil quilômetros por ano.
            </li>

            <li>
              O Brasil tem mais de 200 espécies de aves endêmicas, encontradas apenas aqui.
            </li>
          </ul>
        </div>
      </section>

      {/* Preservação */}
      <section className="max-w-[1100px] mx-auto mt-10">
        <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#7A4F00] mb-4">
            Como Podemos Contribuir?
          </h2>

          <div className="space-y-3 text-[#7A4F00]">
            <p>• Não comprar animais de origem ilegal.</p>
            <p>• Plantar árvores e preservar áreas verdes.</p>
            <p>• Economizar água e energia.</p>
            <p>• Separar corretamente os resíduos para reciclagem.</p>
            <p>• Apoiar projetos de conservação ambiental.</p>
            <p>• Compartilhar conhecimento sobre preservação da natureza.</p>
            <p>• Fazer compostagem de resíduos orgânicos em casa.</p>
            <p>• Visitar e apoiar unidades de conservação e parques naturais.</p>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="max-w-[1100px] mx-auto mt-10">
        <div className="bg-white rounded-2xl border border-[#E0D5C8] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2C2016] mb-4">
            Conclusão
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#D4A373] to-[#E9C46A] rounded-full mb-4"></div>

          <p className="text-gray-500 leading-relaxed">
            A preservação ambiental depende da participação de todos. As aves,
            como as calopsitas e os canários, são apenas uma pequena parte da
            enorme biodiversidade existente no planeta. Ao proteger os habitats
            naturais, combater o tráfico de animais e adotar hábitos mais
            sustentáveis, contribuímos para um futuro mais equilibrado para as
            próximas gerações.
          </p>
        </div>
      </section>

      <footer className="max-w-[1100px] mx-auto mt-10 text-center text-xs text-gray-400">
        Conteúdo educativo desenvolvido para conscientização ambiental e
        valorização da biodiversidade.
      </footer>
    </main>
  );
}

