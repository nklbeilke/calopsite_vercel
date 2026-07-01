import ringneck from "../../assets/ringneck.png"

export default function RingNeck() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={ringneck}
            alt="Ring Neck"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Ring Neck
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            O Ring Neck é uma ave inteligente, ativa e muito apreciada por sua
            beleza e capacidade de aprendizado. Conhecido pelo anel ao redor do
            pescoço dos machos adultos, é uma das espécies mais populares entre
            os amantes de aves ornamentais.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Psittacula krameri</li>
              <li><strong>Origem:</strong> África e Sul da Ásia</li>
              <li><strong>Expectativa de vida:</strong> 20 a 30 anos</li>
              <li><strong>Tamanho:</strong> 35 a 45 cm</li>
              <li><strong>Peso:</strong> 100 g a 150 g</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Os Ring Necks habitam florestas abertas, áreas agrícolas, parques e
            regiões arborizadas. Adaptam-se facilmente a diferentes ambientes e
            podem ser encontrados vivendo em grupos numerosos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves curiosas, independentes e bastante inteligentes. Com
            socialização adequada, podem se tornar dóceis e aprender comandos,
            sons e até algumas palavras.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            A alimentação deve ser composta por ração de qualidade para
            psitacídeos, complementada com frutas, verduras e legumes seguros.
            Água fresca deve estar sempre disponível.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            O Ring Neck necessita de uma gaiola espaçosa ou viveiro que permita
            movimentação e pequenos voos. Poleiros naturais, brinquedos e áreas
            de enriquecimento ambiental ajudam a manter a ave ativa e saudável.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Estimular interação e socialização.</li>
            <li>Oferecer brinquedos para evitar o tédio.</li>
            <li>Manter alimentação equilibrada.</li>
            <li>Garantir espaço adequado para exercícios.</li>
            <li>Realizar acompanhamento veterinário regularmente.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Os machos desenvolvem um anel escuro no pescoço quando adultos.</li>
            <li>São excelentes voadores.</li>
            <li>Podem aprender palavras e sons com treinamento adequado.</li>
            <li>Existem diversas mutações de cores criadas em cativeiro.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}