import agapornis from "../../assets/agapornis.png"

export default function Agapornis() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={agapornis}
            alt="Agapornis"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Agapornis
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            Os agapornis são pequenas aves coloridas, inteligentes e muito
            sociáveis. São conhecidos como "aves do amor" devido ao forte vínculo
            que costumam criar com seus parceiros.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Gênero Agapornis</li>
              <li><strong>Origem:</strong> África</li>
              <li><strong>Expectativa de vida:</strong> 10 a 15 anos</li>
              <li><strong>Tamanho:</strong> 13 a 18 cm</li>
              <li><strong>Peso:</strong> 40 g a 60 g</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Os agapornis vivem em regiões de savana, áreas arborizadas e
            florestas abertas da África. Costumam viver em grupos e passam boa
            parte do dia procurando alimento e interagindo com outros indivíduos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves ativas, curiosas e bastante sociáveis. Gostam de brincar,
            explorar o ambiente e interagir com outros agapornis ou com seus
            tutores quando acostumados ao contato humano.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Sua alimentação deve ser composta por ração específica para aves de
            pequeno porte, além de frutas, verduras e legumes adequados para a
            espécie. Água limpa deve estar sempre disponível.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Precisam de uma gaiola espaçosa, com poleiros naturais, brinquedos,
            balanços e áreas para exploração. O enriquecimento ambiental é
            fundamental para manter a ave ativa e saudável.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Oferecer brinquedos e atividades regularmente.</li>
            <li>Garantir alimentação equilibrada.</li>
            <li>Manter o ambiente limpo e seguro.</li>
            <li>Estimular interação e socialização.</li>
            <li>Realizar acompanhamento veterinário quando necessário.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>São conhecidos popularmente como "aves do amor".</li>
            <li>Possuem personalidade forte apesar do pequeno tamanho.</li>
            <li>Existem diversas mutações de cores em cativeiro.</li>
            <li>Gostam muito de brincar e explorar objetos novos.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}