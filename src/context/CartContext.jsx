import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const STORAGE_KEY = "calopsite_carrinho";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [itens, setItens] = useState(() => loadCart());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itens));
  }, [itens]);

  const adicionarItem = (produto, quantidade = 1) => {
    setItens((prev) => {
      const lista = Array.isArray(prev) ? prev : [];
      const existente = lista.find((item) => item.id === produto.id);
      if (existente) {
        return lista.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...lista, { ...produto, quantidade }];
    });
  };

  const removerItem = (id) => {
    setItens((prev) => (Array.isArray(prev) ? prev : []).filter((item) => item.id !== id));
  };

  const alterarQuantidade = (id, quantidade) => {
    if (quantidade < 1) return;
    setItens((prev) =>
      (Array.isArray(prev) ? prev : []).map((item) =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  const limparCarrinho = () => setItens([]);

  const listaSegura = Array.isArray(itens) ? itens : [];
  const totalItens = listaSegura.reduce((acc, item) => acc + item.quantidade, 0);
  const totalPreco = listaSegura.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        itens: listaSegura,
        adicionarItem,
        removerItem,
        alterarQuantidade,
        limparCarrinho,
        totalItens,
        totalPreco,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
