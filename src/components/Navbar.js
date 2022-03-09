import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Cipeundeuy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" onClick={handleToggle}>
                <NavLink className="nav-link" to="/">
                  Beranda
                </NavLink>
              </li>
              <li className="nav-item dropdown">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="nav-link"
                      to="/About"
                      onClick={handleToggle}
                    >
                      Sejarah Desa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link"
                      to="/WilayahDesa"
                      onClick={handleToggle}
                    >
                      Wilayah Desa
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={handleToggle}>
                <NavLink className="nav-link" to="/Parawisata">
                  Info Parawisata
                </NavLink>
              </li>

              <li className="nav-item" onClick={handleToggle}>
                <HashLink to="/#kontak" className="nav-link">
                  Kontak
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
