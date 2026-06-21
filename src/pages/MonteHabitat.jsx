import { useState } from "react";

export default function MonteHabitat() {

  const [pet, setPet] = useState("");
  const [espaco, setEspaco] = useState("");
  const [orcamento, setOrcamento] = useState("");
  const [resultado, setResultado] = useState(null);

  function gerarHabitat() {

    const recomendacoes = {

      calopsita: {
        pequeno: {
          economico: {
            gaiola: "Gaiola Média Econômica",
            brinquedo: "Balanço Simples",
            poleiro: "Poleiro de Madeira",
          },

          premium: {
            gaiola: "Viveiro Premium Calopsita",
            brinquedo: "Kit Enriquecimento Deluxe",
            poleiro: "Poleiro Natural Premium",
          },
        },

        grande: {
          economico: {
            gaiola: "Viveiro Grande",
            brinquedo: "Escada Interativa",
            poleiro: "Poleiro Natural",
          },

          premium: {
            gaiola: "Habitat Completo Premium",
            brinquedo: "Kit Playground",
            poleiro: "Poleiro Natural Deluxe",
          },
        },
      },

      periquito: {
        pequeno: {
          economico: {
            gaiola: "Gaiola Compacta",
            brinquedo: "Argola Colorida",
            poleiro: "Poleiro Básico",
          },
        },
      },

    };

    const escolha =
      recomendacoes?.[pet]?.[espaco]?.[orcamento];

    setResultado(escolha || null);
  }

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Monte seu Habitat
      </h1>

      <div className="grid gap-6 max-w-xl">

        <select
          className="border p-3 rounded-lg"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
        >
          <option value="">Escolha sua ave</option>

          <option value="calopsita">
            Calopsita
          </option>

          <option value="periquito">
            Periquito
          </option>

        </select>

        <select
          className="border p-3 rounded-lg"
          value={espaco}
          onChange={(e) => setEspaco(e.target.value)}
        >
          <option value="">
            Espaço disponível
          </option>

          <option value="pequeno">
            Pequeno
          </option>

          <option value="grande">
            Grande
          </option>

        </select>

        <select
          className="border p-3 rounded-lg"
          value={orcamento}
          onChange={(e) => setOrcamento(e.target.value)}
        >
          <option value="">
            Orçamento
          </option>

          <option value="economico">
            Econômico
          </option>

          <option value="premium">
            Premium
          </option>

        </select>

        <button
          onClick={gerarHabitat}
          className="
            bg-orange-500
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-orange-600
          "
        >
          Montar Habitat
        </button>

      </div>

      {resultado && (

        <div className="
          mt-12
          border
          rounded-xl
          p-8
          bg-orange-50
          max-w-2xl
        ">

          <h2 className="text-2xl font-bold mb-6">
            Habitat recomendado
          </h2>

          <div className="space-y-4">

            <p>
              <strong>Gaiola:</strong>
              {" "}
              {resultado.gaiola}
            </p>

            <p>
              <strong>Brinquedo:</strong>
              {" "}
              {resultado.brinquedo}
            </p>

            <p>
              <strong>Poleiro:</strong>
              {" "}
              {resultado.poleiro}
            </p>

          </div>

        </div>

      )}

    </div>
  );
}