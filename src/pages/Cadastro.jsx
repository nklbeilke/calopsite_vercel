import { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { fetchCepData, normalizeCep } from "../utils/cep";
import { registerUser, loginUser } from "../utils/auth";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Cadastro() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const [dataRegistro, setDataRegistro] = useState(() => new Date().toISOString().slice(0, 10));

  const [loadingCep, setLoadingCep] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState({ type: "", text: "" });

  const cepNormalized = useMemo(() => normalizeCep(cep), [cep]);

  async function onBuscarCep(e) {
    e?.preventDefault?.();
    setMensagem({ type: "", text: "" });

    try {
      setLoadingCep(true);
      const data = await fetchCepData(cep);
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setUf(data.uf);
      setCep(data.cep);
    } catch (err) {
      setMensagem({ type: "error", text: err?.message || "Falha ao buscar CEP" });
    } finally {
      setLoadingCep(false);
    }
  }

  function validate() {
    if (!nome.trim()) return "Nome é obrigatório";
    if (!email.trim()) return "E-mail é obrigatório";
    if (!senha) return "Senha é obrigatória";
    if (senha !== confirmarSenha) return "As senhas não conferem";

    if (!cepNormalized) return "CEP inválido";
    if (!logradouro.trim()) return "Logradouro é obrigatório (busque o CEP)";
    if (!bairro.trim()) return "Bairro é obrigatório (busque o CEP)";
    if (!cidade.trim()) return "Cidade é obrigatória (busque o CEP)";
    if (!uf.trim()) return "UF é obrigatória (busque o CEP)";

    if (!numero.trim()) return "Número é obrigatório";
    if (!dataRegistro) return "Data de registro é obrigatória";

    return "";
  }

  function onSubmit(e) {
    e.preventDefault();
    setMensagem({ type: "", text: "" });

    const err = validate();
    if (err) {
      setMensagem({ type: "error", text: err });
      return;
    }

    setEnviando(true);
    try {
      registerUser({
        nome: nome.trim(),
        email: email.trim(),
        password: senha,
        cep: cepNormalized,
        logradouro: logradouro.trim(),
        bairro: bairro.trim(),
        cidade: cidade.trim(),
        uf: uf.trim(),
        numero: numero.trim(),
        complemento: complemento.trim(),
        createdAt: new Date(dataRegistro).toISOString(),
      });

      const logged = loginUser(email.trim(), senha);
      auth?.setUser?.(logged);
      navigate("/");
    } catch (ex) {
      setMensagem({ type: "error", text: ex?.message || "Falha ao cadastrar" });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="bg-[#F7F3EE] min-h-screen flex items-center justify-center px-4 py-12">
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
            Informe seus dados, CEP e complementos para finalizar o cadastro.
          </p>

          {mensagem?.text ? (
            <div className="mb-5 flex gap-3 bg-[#FDECEC] border border-[#F2B8B5] rounded-xl px-4 py-3">
              <span className="text-base mt-0.5">⚠️</span>
              <p className="text-xs text-[#8A2C26] leading-relaxed">{mensagem.text}</p>
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="flex flex-col gap-5">

            {/* Dados pessoais */}
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

            {/* Endereço */}
            <Section title="Endereço">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="CEP">
                  <div className="flex gap-2">
                    <input
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      placeholder="00000-000"
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={onBuscarCep}
                      disabled={loadingCep}
                      className="shrink-0 bg-[#9C7A52] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#7A5C34] transition disabled:opacity-50"
                    >
                      {loadingCep ? "Buscando..." : "Buscar"}
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">O endereço será preenchido automaticamente via CEP.</p>
                </Field>

                <Field label="Data de registro">
                  <input type="date" value={dataRegistro} onChange={(e) => setDataRegistro(e.target.value)} className={inputClass} />
                </Field>
              </div>

              <Field label="Logradouro">
                <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} className={inputClass} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Bairro">
                  <input value={bairro} onChange={(e) => setBairro(e.target.value)} className={inputClass} />
                </Field>
                <Field label="Cidade">
                  <input value={cidade} onChange={(e) => setCidade(e.target.value)} className={inputClass} />
                </Field>
              </div>

              <Field label="UF">
                <input value={uf} onChange={(e) => setUf(e.target.value)} className={inputClass} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Número">
                  <input value={numero} onChange={(e) => setNumero(e.target.value)} className={inputClass} />
                </Field>
                <Field label="Complemento (opcional)">
                  <input
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    className={inputClass}
                    placeholder="Apto, bloco, referência..."
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
