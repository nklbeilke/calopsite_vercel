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
import Calopsita from "./pages/Aves/Calopsita"
import Periquito from "./pages/Aves/Periquito"
import Canario from "./pages/Aves/Canario"
import Agapornis from "./pages/Aves/Agapornis";
import Papagaio from "./pages/Aves/Papagaio";
import RingNeck from "./pages/Aves/RingNeck";
import Cacatua from "./pages/Aves/Cacatua";
import Arara from "./pages/Aves/Arara";
import Coruja from "./pages/Aves/Coruja";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

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
                <Route
          path="/aprenda/aves/agapornis"
          element={<Agapornis />}
        />
        <Route
          path="/aprenda/aves/papagaio"
          element={<Papagaio />}
        />
        <Route
          path="/aprenda/aves/ringneck"
          element={<RingNeck />}
        />
        <Route
          path="/aprenda/aves/cacatua"
          element={<Cacatua />}
        />
        <Route
          path="/aprenda/aves/arara"
          element={<Arara />}
        />
        <Route
          path="/aprenda/aves/coruja"
          element={<Coruja />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>

    </>
  );
}