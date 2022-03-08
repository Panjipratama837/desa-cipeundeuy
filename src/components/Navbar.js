import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const handleToggle = () => {
    const navbarCollapse = document.querySelector(".collapse");
    navbarCollapse.classList.remove("show");

    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.classList.add("collapsed");
    navbarToggler.setAttribute("aria-expanded", "false");
  };

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
          <Link className="navbar-brand" to="/">
            Cipeundeuy
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNav"
            onClick={handleToggle}
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">
                  Beranda
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <Link
                  to={"#"}
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Info Desa
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="nav-link" to="/About">
                      Sejarah Desa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/WilayahDesa">
                      Wilayah Desa
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Parawisata">
                  Info Parawisata
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/Artikel">
                  Artikel
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Kontak">
                  Kontak
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
