import { useEffect, useState } from "react";

const STORAGE_KEY = "calopsite_cookies_consentimento";

export default function CookieConsent() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const escolha = localStorage.getItem(STORAGE_KEY);
    if (!escolha) setVisivel(true);
  }, []);

  function responder(valor) {
    localStorage.setItem(STORAGE_KEY, valor);
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#2C2016] text-[#E8D8BF] rounded-2xl shadow-xl border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm leading-relaxed flex-1">
          Usamos cookies para melhorar sua experiência de navegação, lembrar seu carrinho
          e personalizar o conteúdo do site. Ao continuar navegando, você concorda com o
          uso de cookies.
        </p>

        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => responder("rejeitado")}
            className="text-sm font-medium text-[#E8D8BF]/80 hover:text-white px-4 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            Rejeitar
          </button>
          <button
            type="button"
            onClick={() => responder("aceito")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
