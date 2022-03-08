import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Parawisata from "./pages/Parawisata";
import About from "./pages/About";
import Kontak from "./pages/Kontak";
import Artikel from "./pages/Artikel";
import Footer from "./components/Footer";
import WilayahDesa from "./pages/WilayahDesa";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="Parawisata" element={<Parawisata />} />
        <Route path="Artikel" element={<Artikel />} />
        <Route path="About" element={<About />} />
        <Route path="WilayahDesa" element={<WilayahDesa />} />
        <Route path="Kontak" element={<Kontak />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
