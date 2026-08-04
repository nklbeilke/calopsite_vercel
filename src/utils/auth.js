const SESSION_KEY = "calopsite_session";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

async function parseResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.erro || "Erro inesperado");
  }
  return data;
}

export async function registerUser(user) {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome_usuario: user.nome_usuario,
      email: user.email,
      cpf: user.cpf,
      senha: user.senha,
      telefone: user.telefone,
    }),
  });

  return parseResponse(res);
}

export async function loginUser(email, senha) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const usuario = await parseResponse(res);
  localStorage.setItem(SESSION_KEY, JSON.stringify(usuario));
  return usuario;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser() {
  return safeParse(localStorage.getItem(SESSION_KEY), null);
}
