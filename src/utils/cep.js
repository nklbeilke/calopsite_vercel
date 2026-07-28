export function normalizeCep(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length !== 8) return "";
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export async function fetchCepData(cep) {
  const normalized = normalizeCep(cep);
  if (!normalized) throw new Error("CEP inválido");

  const digits = normalized.replace(/\D/g, "");
  const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
  if (!res.ok) throw new Error("Falha ao consultar CEP");

  const data = await res.json();
  if (data.erro) throw new Error("CEP não encontrado");

  return {
    cep: normalized,
    logradouro: data.logradouro || "",
    complemento: data.complemento || "",
    bairro: data.bairro || "",
    localidade: data.localidade || "",
    uf: data.uf || "",
  };
}

