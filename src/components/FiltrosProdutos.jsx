import { FaSortAmountDown } from "react-icons/fa";

const ESPECIES = [
  { valor: "", label: "Todas as espécies" },
  { valor: "calopsita", label: "Calopsita" },
  { valor: "periquito", label: "Periquito" },
  { valor: "agapornis", label: "Agapornis" },
  { valor: "ringneck", label: "Ring Neck" },
  { valor: "canario", label: "Canário" },
  { valor: "papagaio", label: "Papagaio" },
  { valor: "ave-de-rapina", label: "Aves de Rapina" },
];

const ORDENACOES = [
  { valor: "relevancia", label: "Mais relevantes" },
  { valor: "menor-preco", label: "Menor preço" },
  { valor: "maior-preco", label: "Maior preço" },
  { valor: "melhor-avaliados", label: "Melhor avaliados" },
  { valor: "nome", label: "Nome (A-Z)" },
];

export default function FiltrosProdutos({
  especie,
  setEspecie,
  precoMax,
  setPrecoMax,
  ordenacao,
  setOrdenacao,
  precoMaximoDisponivel,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-6">
      {/* ESPÉCIE */}
      <div>
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Espécie</h3>
        <div className="flex flex-col gap-1.5">
          {ESPECIES.map((opcao) => (
            <label
              key={opcao.valor}
              className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-orange-600 transition"
            >
              <input
                type="radio"
                name="especie"
                checked={especie === opcao.valor}
                onChange={() => setEspecie(opcao.valor)}
                className="accent-orange-500"
              />
              {opcao.label}
            </label>
          ))}
        </div>
      </div>

      {/* PREÇO */}
      <div>
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Preço máximo</h3>
        <input
          type="range"
          min={0}
          max={precoMaximoDisponivel}
          step={5}
          value={precoMax}
          onChange={(e) => setPrecoMax(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <p className="text-xs text-gray-500 mt-1">
          Até R$ {precoMax.toFixed(2).replace(".", ",")}
        </p>
      </div>

      {/* ORDENAÇÃO */}
      <div>
        <h3 className="flex items-center gap-1.5 font-semibold text-gray-800 text-sm mb-3">
          <FaSortAmountDown size={12} /> Ordenar por
        </h3>
        <select
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {ORDENACOES.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>
              {opcao.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
