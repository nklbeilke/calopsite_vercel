import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaShoppingCart,
  FaSearch,
  FaTimes,
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import produtos from "../data/Produtos";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
  const user = auth?.user;
  const navigate = useNavigate();

  const [termoBusca, setTermoBusca] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mostrarMenuUsuario, setMostrarMenuUsuario] = useState(false);
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  const resultados =
    termoBusca.trim().length > 0
      ? produtos
          .filter((p) =>
            p.nome.toLowerCase().includes(termoBusca.trim().toLowerCase())
          )
          .slice(0, 6)
      : [];

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setMostrarResultados(false);
      }

      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setMostrarMenuUsuario(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmitBusca = (e) => {
    e.preventDefault();

    if (!termoBusca.trim()) return;

    setMostrarResultados(false);
    navigate(`/produtos?busca=${encodeURIComponent(termoBusca.trim())}`);
  };

  const handleSelecionarResultado = (produto) => {
    setMostrarResultados(false);
    setTermoBusca("");
    navigate(`/categoria/${produto.categoria}/${produto.subcategoria}`);
  };

  return (
    <header className="bg-[#FFEDCB] relative z-50">
      <div className="bg-orange-500 text-white text-center py-2 text-sm">
        Bem-estar, cuidado e enriquecimento para sua ave.
      </div>

      <div className="flex items-center px-8 py-5 gap-4">
        <div className="w-[200px] md:w-[280px] flex-shrink-0">
          <Link to="/" aria-label="Ir para a Home">
            <img src={logo} alt="Logo Calopsite" className="w-28 h-auto" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center relative" ref={searchRef}>
          <form
            onSubmit={handleSubmitBusca}
            className="relative w-full max-w-[520px]"
          >
            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={15}
            />

            <input
              type="text"
              value={termoBusca}
              onChange={(e) => {
                setTermoBusca(e.target.value);
                setMostrarResultados(true);
              }}
              onFocus={() => setMostrarResultados(true)}
              placeholder="Busque por nome do produto..."
              className="border border-gray-300 rounded-full pl-10 pr-10 py-2.5 w-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            {termoBusca && (
              <button
                type="button"
                onClick={() => {
                  setTermoBusca("");
                  setMostrarResultados(false);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Limpar busca"
              >
                <FaTimes size={14} />
              </button>
            )}

            {mostrarResultados && termoBusca.trim().length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-[420px] overflow-y-auto">
                {resultados.length > 0 ? (
                  <>
                    {resultados.map((produto) => (
                      <button
                        key={produto.id}
                        type="button"
                        onClick={() => handleSelecionarResultado(produto)}
                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-orange-50 transition text-left border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={produto.imagem}
                          alt={produto.nome}
                          className="w-12 h-12 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/48x48?text=Produto";
                          }}
                        />

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {produto.nome}
                          </p>

                          <p className="text-xs text-orange-600 font-semibold">
                            R$ {produto.preco.toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                      </button>
                    ))}

                    <button
                      type="submit"
                      className="w-full text-center text-sm font-medium text-orange-600 hover:bg-orange-50 py-3 transition"
                    >
                      Ver todos os resultados para "{termoBusca}"
                    </button>
                  </>
                ) : (
                  <p className="px-4 py-4 text-sm text-gray-500 text-center">
                    Nenhum produto encontrado para "{termoBusca}"
                  </p>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="flex justify-end items-center gap-3 flex-shrink-0">
          <a
            href="tel:+551140028922"
            aria-label="Fale com a gente pelo telefone"
            title="Fale com a gente"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-gray-700 shadow-sm border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
          >
            <FaPhoneAlt size={16} />
          </a>

          <Link
            to="/carrinho"
            aria-label="Ver carrinho de compras"
            title="Carrinho"
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white text-gray-700 shadow-sm border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
          >
            <FaShoppingCart size={17} />

            {cart?.totalItens > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 border-2 border-[#FFEDCB]">
                {cart.totalItens > 99 ? "99+" : cart.totalItens}
              </span>
            )}
          </Link>

          {user ? (
            <div className="relative ml-1" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setMostrarMenuUsuario((v) => !v)}
                className="flex items-center gap-2 bg-orange-500 text-white pl-3 pr-4 py-2.5 rounded-full hover:bg-orange-600 transition font-medium text-sm"
              >
                <FaUser size={13} />
                <span className="truncate max-w-[110px] hidden md:inline">
                  {user.nome || user.email}
                </span>
              </button>

              {mostrarMenuUsuario && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                  <Link
                    to="/meus-pedidos"
                    onClick={() => setMostrarMenuUsuario(false)}
                    className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 transition"
                  >
                    <FaBoxOpen size={13} className="text-gray-400" />
                    Meus Pedidos
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setMostrarMenuUsuario(false);
                      auth?.logout?.();
                    }}
                    className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition border-t border-gray-100"
                  >
                    <FaSignOutAlt size={13} />
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-sm border border-orange-200 ml-2 bg-white">
              <Link
                to="/login"
                className="bg-orange-500 text-white font-bold text-sm px-5 py-2 w-full text-center hover:bg-orange-600 transition"
              >
                Entrar
              </Link>

              <Link
                to="/cadastro"
                className="bg-white text-orange-600 font-semibold text-xs px-5 py-2 w-full text-center hover:bg-orange-50 transition"
              >
                Cadastrar
              </Link>
            </div>
          )}
        </div>
      </div>

        <nav className="pb-3">
          <div className="max-w-[680px] mx-auto flex justify-between items-center">
            <Link to="/categoria/aves" className="font-medium text-[#9C7A52] hover:text-[#7A5C34] transition">
              Aves
            </Link>

            <Link to="/categoria/alimentacao" className="font-medium text-[#9C7A52] hover:text-[#7A5C34] transition">
              Alimentação
            </Link>

            <Link to="/categoria/habitat" className="font-medium text-[#9C7A52] hover:text-[#7A5C34] transition">
              Habitat
            </Link>

            <Link to="/categoria/enriquecimento" className="font-medium text-[#9C7A52] hover:text-[#7A5C34] transition">
              Enriquecimento
            </Link>

            <Link to="/aprenda" className="font-semibold text-[#7A5C34] hover:text-orange-600 transition">
              Aprenda
            </Link>

            <Link to="/monte-seu-habitat" className="font-semibold text-[#7A5C34] hover:text-orange-600 transition">
              Monte seu Habitat
            </Link>
          </div>
        </nav>
    </header>
  );
}