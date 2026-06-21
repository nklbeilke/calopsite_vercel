import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import MonteHabitat from "./pages/MonteHabitat";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";

import Aprenda from "./pages/Aprenda";
import AprendaAves from "./pages/AprendaAves";
import AprendaMeioAmbiente from "./pages/AprendaMeioAmbiente";
import Calopsita from "./pages/Calopsita"
import Periquito from "./pages/Periquito"
import Canario from "./pages/Canario"

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/categoria/:categoria"
          element={<Produtos />}
        />


        <Route
          path="/categoria/:categoria/:subcategoria"
          element={<Produtos />}
        />


        <Route
          path="/monte-seu-habitat"
          element={<MonteHabitat />}
        />


        <Route
          path="/aprenda"
          element={<Aprenda />}
        />

        <Route
          path="/aprenda/aves"
          element={<AprendaAves />}
        />

        <Route
          path="/aprenda/meio-ambiente"
          element={<AprendaMeioAmbiente />}
        />


        <Route
          path="/produtos"
          element={<Produtos />}
        />

        <Route
          path="/carrinho"
          element={<Carrinho />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/aprenda/aves/calopsita"
          element={<Calopsita />}
        />

        <Route
          path="/aprenda/aves/periquito"
          element={<Periquito />}
        />

        <Route
          path="/aprenda/aves/canario"
          element={<Canario />}
        />
      </Routes>

    </>
  );
}