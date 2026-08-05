const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function buscarMaisVendidos(limite = 5) {
  const res = await fetch(`${API_URL}/produtos/mais-vendidos?limite=${limite}`);

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.erro || "Erro ao buscar produtos mais vendidos");
  }
  return data;
}
