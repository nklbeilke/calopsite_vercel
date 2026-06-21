import { useState } from "react";

export default function MonteHabitat() {
  const [especie, setEspecie] = useState("");
  const [idade, setIdade] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [resultado, setResultado] = useState(null);

  function gerarHabitat() {
    const recomendacoes = {
      calopsita: {
        filhote: {
          calma: {
            gaiola: "Gaiola média com boa ventilação",
            brinquedo: "Brinquedos leves e seguros",
            poleiro: "Poleiro natural de madeira",
          },
          ativa: {
            gaiola: "Gaiola espaçosa para exercícios",
            brinquedo: "Escada e balanço interativo",
            poleiro: "Poleiros variados",
          },
          curiosa: {
            gaiola: "Habitat com espaço para exploração",
            brinquedo: "Kit de enriquecimento ambiental",
            poleiro: "Poleiro natural com texturas",
          },
        },

        adulta: {
          calma: {
            gaiola: "Gaiola confortável para calopsita adulta",
            brinquedo: "Balanço simples e argolas",
            poleiro: "Poleiro natural anatômico",
          },
          ativa: {
            gaiola: "Viveiro grande para calopsita",
            brinquedo: "Playground com escadas e cordas",
            poleiro: "Poleiros de diferentes espessuras",
          },
          curiosa: {
            gaiola: "Habitat completo com áreas de exploração",
            brinquedo: "Brinquedos de forrageamento",
            poleiro: "Poleiro natural premium",
          },
        },
      },

      periquito: {
        filhote: {
          calma: {
            gaiola: "Gaiola compacta segura",
            brinquedo: "Argolas pequenas",
            poleiro: "Poleiro básico de madeira",
          },
          ativa: {
            gaiola: "Gaiola média com espaço para voo curto",
            brinquedo: "Escada e balanço colorido",
            poleiro: "Poleiros finos variados",
          },
          curiosa: {
            gaiola: "Gaiola com brinquedos interativos",
            brinquedo: "Kit de brinquedos coloridos",
            poleiro: "Poleiro natural pequeno",
          },
        },

        adulta: {
          calma: {
            gaiola: "Gaiola média para periquito",
            brinquedo: "Balanço simples",
            poleiro: "Poleiro de madeira",
          },
          ativa: {
            gaiola: "Viveiro pequeno para periquitos",
            brinquedo: "Escadas, argolas e balanços",
            poleiro: "Poleiros variados",
          },
          curiosa: {
            gaiola: "Habitat enriquecido para periquito",
            brinquedo: "Brinquedos de exploração",
            poleiro: "Poleiros naturais",
          },
        },
      },

      canario: {
        filhote: {
          calma: {
            gaiola: "Gaiola segura para canário jovem",
            brinquedo: "Acessórios simples",
            poleiro: "Poleiro fino de madeira",
          },
          ativa: {
            gaiola: "Gaiola com espaço horizontal",
            brinquedo: "Poleiros e acessórios leves",
            poleiro: "Poleiros em alturas diferentes",
          },
          curiosa: {
            gaiola: "Gaiola com enriquecimento leve",
            brinquedo: "Acessórios naturais",
            poleiro: "Poleiro natural fino",
          },
        },

        adulta: {
          calma: {
            gaiola: "Gaiola confortável para canário",
            brinquedo: "Acessórios básicos",
            poleiro: "Poleiro fino anatômico",
          },
          ativa: {
            gaiola: "Gaiola ampla horizontal",
            brinquedo: "Poleiros extras e acessórios leves",
            poleiro: "Poleiros variados",
          },
          curiosa: {
            gaiola: "Habitat com estímulos naturais",
            brinquedo: "Acessórios de enriquecimento",
            poleiro: "Poleiros naturais finos",
          },
        },
      },
    };

    const escolha = recomendacoes?.[especie]?.[idade]?.[comportamento];

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
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
        >
          <option value="">Escolha a espécie</option>
          <option value="calopsita">Calopsita</option>
          <option value="periquito">Periquito</option>
          <option value="canario">Canário</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        >
          <option value="">Idade da ave</option>
          <option value="filhote">Filhote</option>
          <option value="adulta">Adulta</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          value={comportamento}
          onChange={(e) => setComportamento(e.target.value)}
        >
          <option value="">Comportamento</option>
          <option value="calma">Calma</option>
          <option value="ativa">Ativa</option>
          <option value="curiosa">Curiosa</option>
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
        <div
          className="
            mt-12
            border
            rounded-xl
            p-8
            bg-orange-50
            max-w-2xl
          "
        >
          <h2 className="text-2xl font-bold mb-6">
            Habitat recomendado
          </h2>

          <div className="space-y-4">
            <p>
              <strong>Gaiola:</strong> {resultado.gaiola}
            </p>

            <p>
              <strong>Brinquedo:</strong> {resultado.brinquedo}
            </p>

            <p>
              <strong>Poleiro:</strong> {resultado.poleiro}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}