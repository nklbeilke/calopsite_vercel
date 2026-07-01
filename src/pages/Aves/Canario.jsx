import canario from "../../assets/canario.png"

export default function Canario() {
  return (
    <main className="bg-[#FFF7EA] min-h-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-10">
          <img
            src={canario}
            alt="Canário"
            className="max-w-[500px] w-full"
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#9C7A52] mb-4">
            Canário
          </h1>

          <p className="text-[#9C7A52] text-lg max-w-3xl mx-auto">
            O canário é uma das aves domésticas mais populares do mundo,
            conhecido por seu canto melodioso, beleza e facilidade de criação.
            É uma excelente opção para quem deseja ter uma ave alegre e de
            baixa manutenção.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-5">
            Informações Gerais
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-[#E8D8BF]">
            <ul className="space-y-3 text-[#9C7A52]">
              <li><strong>Nome científico:</strong> Serinus canaria</li>
              <li><strong>Origem:</strong> Ilhas Canárias</li>
              <li><strong>Expectativa de vida:</strong> 10 a 15 anos</li>
              <li><strong>Tamanho:</strong> 10 a 15 cm</li>
              <li><strong>Peso:</strong> 15 g a 30 g</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Natural
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            Os canários são originários das Ilhas Canárias, Madeira e Açores.
            Na natureza, vivem em áreas arborizadas, campos abertos e regiões
            com vegetação abundante, onde encontram sementes e pequenos frutos
            para se alimentar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Comportamento
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            São aves tranquilas, ativas e conhecidas principalmente pelo canto.
            Os machos costumam cantar com mais frequência, especialmente durante
            períodos reprodutivos. Gostam de observar o ambiente e voar entre
            os poleiros.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Alimentação
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            A alimentação deve incluir ração específica para canários,
            complementada com sementes, verduras, legumes e frutas adequadas.
            Uma dieta variada contribui para a saúde, a plumagem e a qualidade
            do canto.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Habitat Ideal
          </h2>

          <p className="text-[#9C7A52] leading-relaxed">
            O ideal é oferecer uma gaiola espaçosa que permita pequenos voos,
            equipada com poleiros em diferentes alturas, comedouros, bebedouros
            e espaço para banho. O ambiente deve ser bem ventilado e protegido
            de correntes de ar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Cuidados Essenciais
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Manter água limpa disponível diariamente.</li>
            <li>Realizar limpeza frequente da gaiola.</li>
            <li>Oferecer alimentação equilibrada.</li>
            <li>Garantir exposição moderada à luz natural.</li>
            <li>Observar alterações no comportamento ou no canto.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9C7A52] mb-4">
            Curiosidades
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#9C7A52]">
            <li>Recebeu seu nome por ser originário das Ilhas Canárias.</li>
            <li>É uma das aves de estimação mais populares do mundo.</li>
            <li>Existem diversas variedades de cores e tipos de canto.</li>
            <li>Os machos geralmente cantam mais do que as fêmeas.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}