import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser, loginUser } from "../utils/auth";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

function normalizeCpf(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 11);
}

function formatCpf(digits) {
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export default function Cadastro() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState({ type: "", text: "" });

  function onCpfChange(e) {
    setCpf(formatCpf(normalizeCpf(e.target.value)));
  }

  function validate() {
    if (!nome.trim()) return "Nome é obrigatório";
    if (!email.trim()) return "E-mail é obrigatório";
    if (!senha) return "Senha é obrigatória";
    if (senha !== confirmarSenha) return "As senhas não conferem";
    if (normalizeCpf(cpf).length !== 11) return "CPF inválido";

    return "";
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMensagem({ type: "", text: "" });

    const err = validate();
    if (err) {
      setMensagem({ type: "error", text: err });
      return;
    }

    setEnviando(true);
    try {
      await registerUser({
        nome_usuario: nome.trim(),
        email: email.trim(),
        cpf: normalizeCpf(cpf),
        senha,
        telefone: telefone.trim() || null,
      });

      const logged = await loginUser(email.trim(), senha);
      auth?.setUser?.(logged);
      navigate("/");
    } catch (ex) {
      setMensagem({ type: "error", text: ex?.message || "Falha ao cadastrar" });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="bg-[#FFF7EA] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={logo} alt="Logo Calopsite" className="w-20 h-auto" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-8">

          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#9C7A52] mb-2 text-center">
            Crie sua conta
          </p>
          <h1 className="text-3xl font-semibold text-[#2C2016] mb-1 text-center">
            Cadastrar usuário
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Informe seus dados para finalizar o cadastro.
          </p>

          {mensagem?.text ? (
            <div className="mb-5 flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
              <span className="text-base mt-0.5">⚠️</span>
              <p className="text-xs text-[#8A2C26] leading-relaxed">{mensagem.text}</p>
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="flex flex-col gap-5">

            <Section title="Dados pessoais">
              <Field label="Nome">
                <input value={nome} onChange={(e) => setNome(e.target.value)} className={inputClass} />
              </Field>

              <Field label="E-mail">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="CPF">
                  <input
                    value={cpf}
                    onChange={onCpfChange}
                    placeholder="000.000.000-00"
                    inputMode="numeric"
                    className={inputClass}
                  />
                </Field>
                <Field label="Telefone (opcional)">
                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Senha">
                  <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className={inputClass} />
                </Field>
                <Field label="Confirmar senha">
                  <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>
            </Section>

            <button
              type="submit"
              disabled={enviando}
              className="mt-2 bg-[#9C7A52] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#7A5C34] transition disabled:opacity-50"
            >
              {enviando ? "Criando conta..." : "Criar conta"}
            </button>

          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Já tem conta?{" "}
            <Link to="/login" className="text-[#7A5C34] font-semibold hover:underline">
              Entrar
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#E0D5C8] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2C2016] placeholder:text-gray-400 outline-none focus:border-[#9C7A52] focus:ring-2 focus:ring-[#9C7A52]/20 transition";

function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[11px] font-medium tracking-wider uppercase text-[#7A5C34] bg-[#F5EDE0] inline-block w-fit px-2.5 py-1 rounded">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-[#7A5C34] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
