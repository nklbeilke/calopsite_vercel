import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../utils/auth";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const logged = loginUser(email, senha);
      auth?.setUser?.(logged);
      navigate("/");
    } catch (err) {
      setErro(err?.message || "Falha ao entrar");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="bg-[#F7F3EE] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={logo} alt="Logo Calopsite" className="w-20 h-auto" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-8">

          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2 text-center">
            Bem-vindo de volta
          </p>
          <h1 className="text-3xl font-semibold text-[#2C2016] mb-1 text-center">
            Entrar
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Use seu e-mail e senha para acessar sua conta.
          </p>

          {erro ? (
            <div className="mb-5 flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
              <span className="text-base mt-0.5">⚠️</span>
              <p className="text-xs text-[#8A2C26] leading-relaxed">{erro}</p>
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="flex flex-col gap-4">

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-[#7A5C34] mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2C2016] placeholder:text-gray-400 outline-none focus:border-[#9C7A52] focus:ring-2 focus:ring-[#9C7A52]/20 transition"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-[#7A5C34] mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-4 py-2.5 pr-12 text-sm text-[#2C2016] placeholder:text-gray-400 outline-none focus:border-[#9C7A52] focus:ring-2 focus:ring-[#9C7A52]/20 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9C7A52] font-medium"
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="mt-2 bg-[#9C7A52] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#7A5C34] transition disabled:opacity-50"
            >
              {carregando ? "Entrando..." : "Entrar"}
            </button>

          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Não tem conta?{" "}
            <Link to="/cadastro" className="text-[#7A5C34] font-semibold hover:underline">
              Cadastre-se
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
