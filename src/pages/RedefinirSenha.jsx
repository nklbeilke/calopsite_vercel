import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { redefinirSenha } from "../utils/auth";
import logo from "../assets/logo.png";

export default function RedefinirSenha() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErro("");

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem");
      return;
    }

    setCarregando(true);
    try {
      await redefinirSenha(token, senha);
      setSucesso(true);
      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      setErro(err?.message || "Falha ao redefinir senha");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="bg-[#FFF7EA] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={logo} alt="Logo Calopsite" className="w-32 h-auto" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-8">
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2 text-center">
            Recuperar acesso
          </p>
          <h1 className="text-3xl font-semibold text-[#2C2016] mb-1 text-center">
            Redefinir senha
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Escolha uma nova senha para sua conta.
          </p>

          {erro ? (
            <div className="mb-5 flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
              <span className="text-base mt-0.5">⚠️</span>
              <p className="text-xs text-[#8A2C26] leading-relaxed">{erro}</p>
            </div>
          ) : null}

          {sucesso ? (
            <div className="flex gap-3 bg-[#EAF6EC] border border-[#B8DFC0] rounded-xl px-4 py-3">
              <p className="text-sm text-[#2E6B3E] leading-relaxed">
                Senha redefinida com sucesso! Redirecionando para o login...
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-[#7A5C34] mb-1.5">
                  Nova senha
                </label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2C2016] placeholder:text-gray-400 outline-none focus:border-[#9C7A52] focus:ring-2 focus:ring-[#9C7A52]/20 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-[#7A5C34] mb-1.5">
                  Confirmar nova senha
                </label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2C2016] placeholder:text-gray-400 outline-none focus:border-[#9C7A52] focus:ring-2 focus:ring-[#9C7A52]/20 transition"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={carregando}
                className="mt-2 bg-[#9C7A52] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#7A5C34] transition disabled:opacity-50"
              >
                {carregando ? "Salvando..." : "Redefinir senha"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
