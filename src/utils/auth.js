const USERS_KEY = "calopsite_users";
const SESSION_KEY = "calopsite_session";

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

function getUsers() {
  return safeParse(localStorage.getItem(USERS_KEY), []);
}

function setUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(user) {
  const users = getUsers();
  const email = String(user.email || "").toLowerCase().trim();

  if (!email) throw new Error("E-mail é obrigatório");

  const exists = users.some((u) => String(u.email).toLowerCase() === email);
  if (exists) throw new Error("Já existe um usuário com este e-mail");

  const now = new Date().toISOString();
  const nextUser = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    ...user,
    email,
    createdAt: user.createdAt || now,
  };

  users.push(nextUser);
  setUsers(users);

  return nextUser;
}

export function loginUser(email, password) {
  const users = getUsers();
  const emailNorm = String(email || "").toLowerCase().trim();
  const passwordStr = String(password || "");

  const found = users.find((u) => String(u.email).toLowerCase() === emailNorm);
  if (!found) throw new Error("E-mail ou senha inválidos");

  if (String(found.password) !== passwordStr) throw new Error("E-mail ou senha inválidos");

  const { password: _pw, ...publicUser } = found;
  localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
  return publicUser;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser() {
  return safeParse(localStorage.getItem(SESSION_KEY), null);
}

