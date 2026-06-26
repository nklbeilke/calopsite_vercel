import { useState } from "react";

export default function MonteHabitat() {
  const [especie, setEspecie] = useState("");
  const [idade, setIdade] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [resultado, setResultado] = useState(null);

  const especies = [
    { value: "calopsita", label: "Calopsita" },
    { value: "periquito", label: "Periquito" },
    { value: "canario", label: "Canário" },
    { value: "agapornis", label: "Agapornis" },
    { value: "papagaio", label: "Papagaio" },
    { value: "ringneck", label: "Ring Neck" },
    { value: "cacatua", label: "Cacatua" },
    { value: "arara", label: "Arara" },
    { value: "coruja", label: "Coruja" },
  ];

  function gerarHabitat() {
    if (!especie || !idade || !comportamento) {
      setResultado(null);
      return;
    }

    const nomeAve = especies.find((ave) => ave.value === especie)?.label;

    const resultadoGerado = {
      titulo: `Habitat ideal para ${nomeAve}`,

      gaiola:
        especie === "arara" || especie === "cacatua" || especie === "papagaio"
          ? "Viveiro grande, resistente e com bastante espaço para movimentação."
          : especie === "coruja"
          ? "Recinto amplo, seguro, tranquilo e adaptado ao comportamento da espécie."
          : "Gaiola espaçosa, segura, bem ventilada e adequada ao porte da ave.",

      poleiro:
        especie === "canario" || especie === "periquito"
          ? "Poleiros finos de madeira natural em alturas diferentes."
          : "Poleiros naturais de diferentes espessuras para estimular os pés.",

      brinquedo:
        comportamento === "ativa"
          ? "Escadas, balanços, cordas e brinquedos para gasto de energia."
          : comportamento === "curiosa"
          ? "Brinquedos de forrageamento, exploração e enriquecimento ambiental."
          : "Brinquedos leves, seguros e simples para evitar estresse.",

      cuidado:
        idade === "filhote"
          ? "Evite excesso de estímulos e priorize segurança, adaptação e conforto."
          : idade === "senior"
          ? "Prefira acessos fáceis, poleiros confortáveis e ambiente mais calmo."
          : "Mantenha uma rotina com limpeza, interação e enriquecimento diário.",

      alimentacao:
        especie === "canario"
          ? "Mistura adequada para canários, verduras seguras e água sempre limpa."
          : especie === "coruja"
          ? "Alimentação específica e acompanhamento especializado."
          : "Ração adequada para a espécie, sementes com moderação, frutas e verduras seguras.",
    };

    setResultado(resultadoGerado);
  }

  return (
    <main className="min-h-screen bg-[#F7F1E6] px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#9C7A52] font-semibold uppercase tracking-wide">
            Monte seu Habitat
          </p>

          <h1 className="text-4xl font-bold text-[#9C7A52] mt-3">
            Descubra o habitat ideal para sua ave
          </h1>

          <p className="text-[#9C7A52] mt-4 max-w-2xl mx-auto">
            Escolha a espécie, idade e comportamento da ave para receber uma
            sugestão personalizada de ambiente, acessórios e cuidados.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md border border-[#E8D8BF] p-8">
            <h2 className="text-2xl font-bold text-[#9C7A52] mb-6">
              Personalize o habitat
            </h2>

            <div className="grid gap-5">
              <div>
                <label className="block mb-2 font-semibold text-[#9C7A52]">
                  Espécie da ave
                </label>

                <select
                  className="w-full border border-[#D8C4A8] text-[#9C7A52] p-3 rounded-xl outline-none focus:border-[#9C7A52]"
                  value={especie}
                  onChange={(e) => setEspecie(e.target.value)}
                >
                  <option value="">Escolha a espécie</option>
                  {especies.map((ave) => (
                    <option key={ave.value} value={ave.value}>
                      {ave.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#9C7A52]">
                  Idade
                </label>

                <select
                  className="w-full border border-[#D8C4A8] text-[#9C7A52] p-3 rounded-xl outline-none focus:border-[#9C7A52]"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                >
                  <option value="">Idade da ave</option>
                  <option value="filhote">Filhote</option>
                  <option value="adulta">Adulta</option>
                  <option value="senior">Sênior</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#9C7A52]">
                  Comportamento
                </label>

                <select
                  className="w-full border border-[#D8C4A8] text-[#9C7A52] p-3 rounded-xl outline-none focus:border-[#9C7A52]"
                  value={comportamento}
                  onChange={(e) => setComportamento(e.target.value)}
                >
                  <option value="">Comportamento</option>
                  <option value="calma">Calma</option>
                  <option value="ativa">Ativa</option>
                  <option value="curiosa">Curiosa</option>
                </select>
              </div>

              <button
                onClick={gerarHabitat}
                className="
                  bg-[#9C7A52]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  hover:bg-[#876645]
                  transition
                  mt-3
                "
              >
                Montar Habitat
              </button>
            </div>
          </div>
        </div>

        {resultado && (
          <div className="mt-12 bg-white rounded-3xl shadow-lg border border-[#E8D8BF] p-10">
            <h2 className="text-3xl font-bold text-[#9C7A52] mb-8">
              {resultado.titulo}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card titulo="Gaiola ou viveiro" texto={resultado.gaiola} />
              <Card titulo="Poleiros" texto={resultado.poleiro} />
              <Card titulo="Brinquedos" texto={resultado.brinquedo} />
              <Card titulo="Cuidados" texto={resultado.cuidado} />
              <Card titulo="Alimentação" texto={resultado.alimentacao} />
              <Card
                titulo="Dica Calopsite"
                texto="Combine segurança, conforto e enriquecimento ambiental para criar um espaço mais saudável para sua ave."
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function Card({ titulo, texto }) {
  return (
    <div
      className="
        bg-[#FFF8EE]
        rounded-2xl
        p-6
        border
        border-[#E8D8BF]
        hover:shadow-md
        transition
      "
    >
      <h3 className="text-lg font-bold text-[#9C7A52] mb-3">{titulo}</h3>

      <p className="text-[#9C7A52] leading-relaxed">{texto}</p>
    </div>
  );
}