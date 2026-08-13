import { useState } from "react";
import { Link } from "react-router-dom";

import { solicitarRedefinicaoSenha } from "../utils/auth";
import logo from "../assets/logo.png";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const dados = await solicitarRedefinicaoSenha(email);
      setResultado(dados);
    } catch (err) {
      setErro(err?.message || "Falha ao solicitar redefinição de senha");
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
            Esqueci minha senha
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Informe seu e-mail cadastrado para gerar um link de redefinição de senha.
          </p>

          {erro ? (
            <div className="mb-5 flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
              <span className="text-base mt-0.5">⚠️</span>
              <p className="text-xs text-[#8A2C26] leading-relaxed">{erro}</p>
            </div>
          ) : null}

          {resultado ? (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                {resultado.mensagem}
              </p>

              {resultado.token_simulado ? (
                <div className="bg-[#FEF3E2] border border-[#F5C97A] rounded-xl px-4 py-3">
                  <p className="text-xs text-[#7A4F00] leading-relaxed mb-2">
                    Em um ambiente real, esse link seria enviado por e-mail. Como este é um
                    ambiente de demonstração, aqui está o link de redefinição:
                  </p>
                  <Link
                    to={`/redefinir-senha/${resultado.token_simulado}`}
                    className="text-sm font-semibold text-[#7A4F00] underline break-all"
                  >
                    /redefinir-senha/{resultado.token_simulado}
                  </Link>
                </div>
              ) : null}

              <Link
                to="/login"
                className="text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
              >
                Voltar para o login
              </Link>
            </div>
          ) : (
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

              <button
                type="submit"
                disabled={carregando}
                className="mt-2 bg-[#9C7A52] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#7A5C34] transition disabled:opacity-50"
              >
                {carregando ? "Enviando..." : "Enviar link de redefinição"}
              </button>
            </form>
          )}

          <p className="text-sm text-gray-500 text-center mt-6">
            Lembrou a senha?{" "}
            <Link to="/login" className="text-[#7A5C34] font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
