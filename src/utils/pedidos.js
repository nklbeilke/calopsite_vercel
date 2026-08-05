const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function criarPedido(pedido) {
  const res = await fetch(`${API_URL}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.erro || "Erro ao finalizar pedido");
  }
  return data;
}

export async function listarPedidos(idUsuario) {
  const res = await fetch(`${API_URL}/usuarios/${idUsuario}/pedidos`);

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.erro || "Erro ao buscar pedidos");
  }
  return data;
}
