import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaQrcode,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-[#EAE2D3] text-[#6B5636] mt-16">
      <div className="max-w-[1400px] mx-auto px-8 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Logo Calopsite" className="w-16 h-auto mb-4" />
          <p className="text-sm text-[#6B5636] leading-relaxed">
            Bem-estar, cuidado e enriquecimento para sua ave.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2C2016] mb-4">
            Categorias
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/categoria/alimentacao" className="hover:text-orange-600 transition">Alimentação</Link></li>
            <li><Link to="/categoria/habitat" className="hover:text-orange-600 transition">Habitat</Link></li>
            <li><Link to="/categoria/enriquecimento" className="hover:text-orange-600 transition">Enriquecimento</Link></li>
            <li><Link to="/aprenda" className="hover:text-orange-600 transition">Aprenda</Link></li>
            <li><Link to="/monte-seu-habitat" className="hover:text-orange-600 transition">Monte seu Habitat</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2C2016] mb-4">
            Minha conta
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/login" className="hover:text-orange-600 transition">Entrar</Link></li>
            <li><Link to="/cadastro" className="hover:text-orange-600 transition">Cadastrar</Link></li>
            <li><Link to="/meus-pedidos" className="hover:text-orange-600 transition">Meus pedidos</Link></li>
            <li><Link to="/carrinho" className="hover:text-orange-600 transition">Carrinho</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2C2016] mb-4">
            Atendimento
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="tel:+5541999999999" className="flex items-center gap-2 hover:text-orange-600 transition">
                <FaPhoneAlt size={12} />
                (41) 9999-9999
              </a>
            </li>
            <li>
              <a href="mailto:contato@calopsite.shop" className="flex items-center gap-2 hover:text-orange-600 transition">
                <FaEnvelope size={12} />
                contato@calopsite.shop
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-orange-600 transition"
              >
                <FaWhatsapp size={13} />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#DCD0BA]">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8A7355] text-center sm:text-left">
            © {ano} Calopsite. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-white border border-[#DCD0BA] rounded-lg px-3 py-1.5 text-xs text-[#6B5636]">
              <FaQrcode size={13} /> Pagamento via Pix
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
