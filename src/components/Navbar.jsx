import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import MenuCategorias from "./MenuCategorias";

export default function Navbar() {
  return (
    <header className="bg-[#FFEDCB] relative z-50">

      {/* BARRA TOPO */}
      <div className="bg-orange-500 text-white text-center py-2">
        Bem-estar, cuidado e enriquecimento para sua ave.
      </div>

      {/* HEADER PRINCIPAL */}
      <div className="flex items-center px-8 py-5">

        {/* LOGO */}
        <div className="w-[280px]">
          <Link to="/" aria-label="Ir para a Home">
            <img
              src={logo}
              alt="Logo Calopsite"
              className="w-24 h-auto"
            />
          </Link>
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="O que seu pet precisa?"
            className="border rounded-full px-5 py-2 w-[520px]"
          />
        </div>

        {/* AÇÕES */}
        <div className="w-[280px] flex justify-end items-center gap-6">

          <button className="text-xl hover:text-red-500 transition">
            <FaPhoneAlt />
          </button>

          <button className="text-xl hover:text-gray-600 transition">
            <FaShoppingCart />
          </button>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
            Entrar / Cadastrar
          </button>

        </div>

      </div>

      {/* MENU NAVBAR */}
      <nav className="flex justify-center items-center gap-12 pb-4">

        {/* DROPDOWN PRINCIPAL */}
        <MenuCategorias />

      </nav>

    </header>
  );
}