import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Parawisata from "./pages/Parawisata";
import About from "./pages/About";
import Kontak from "./pages/Kontak";
import Footer from "./components/Footer";
import WilayahDesa from "./pages/WilayahDesa";
import ArtikelDetail from "./pages/ArtikelDetail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="parawisata" element={<Parawisata />} />
        <Route path="artikel/:id" element={<ArtikelDetail />} />
        <Route path="about" element={<About />} />
        <Route path="wilayahDesa" element={<WilayahDesa />} />
        <Route path="kontak" element={<Kontak />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
