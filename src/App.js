import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Parawisata from "./pages/Parawisata";
import About from "./pages/About";
import Footer from "./components/Footer";
import WilayahDesa from "./pages/WilayahDesa";
import ArtikelDetail from "./pages/ArtikelDetail";
import Location from "./Location";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Location />
      <Routes>
        <Route exact path="parawisata" element={<Parawisata />} />
        <Route exact path="artikel/:id" element={<ArtikelDetail />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="wilayahDesa" element={<WilayahDesa />} />
        <Route path="/" element={<Beranda />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
