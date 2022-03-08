import "./Artikel.css";
import { useEffect } from "react";
import "./Beranda.css";
import { Link } from "react-router-dom";

function Beranda() {
  useEffect(() => {
    document.title = "Beranda";
  }, []);

  return (
    <div className="container mt-5">
      <div class="row">
        <main className="col-md-9">
          <form className="form d-flex d-block d-sm-none mb-3">
            <i className="bi bi-search"></i>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-pause="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <picture>
                  <img
                    src={require("../images/carousel-1.jpg")}
                    className="d-block w-100"
                    alt="..."
                  />
                </picture>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <picture>
                  <img
                    src={require("../images/carousel-2.jpg")}
                    className="d-block w-100"
                    alt="..."
                  />
                </picture>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <picture>
                  <img
                    src={require("../images/carousel-3.jpg")}
                    className="d-block w-100"
                    alt="..."
                  />
                </picture>
              </div>
            </div>
          </div>

          <div class="artikel mt-5">
            <h3>Berita Terkini</h3>
            <hr />
            <div class="row">
              <div class="col-md-4">
                <picture>
                  <img
                    src={require("../images/artikel-1.jpg")}
                    className="img-thumbnail"
                    alt="artikel-1"
                  />
                </picture>
              </div>
              <div class="col-md-8">
                <h4>Judul Konten</h4>
                <p>Minggu, 03 Maret 2022</p>
                <p className="text-muted">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  ut quaerat cupiditate atque arch...
                </p>
                <Link to={"/"} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <picture>
                  <img
                    src={require("../images/artikel-2.jpg")}
                    className="img-thumbnail"
                    alt="artikel-2"
                  />
                </picture>
              </div>
              <div class="col-md-8">
                <h4>Judul Konten</h4>
                <p>Minggu, 03 Maret 2022</p>
                <p className="text-muted">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  ut quaerat cupiditate atque arch...
                </p>
                <Link to={"/"} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <picture>
                  <img
                    src={require("../images/artikel-3.jpg")}
                    className="img-thumbnail"
                    alt="artikel-3"
                  />
                </picture>
              </div>
              <div class="col-md-8">
                <h4>Judul Konten</h4>
                <p>Minggu, 03 Maret 2022</p>
                <p className="text-muted">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  ut quaerat cupiditate atque arch...
                </p>
                <Link to={"/"} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div class="paginate mt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </main>

        <aside className="col-md-3">
          <form className="form d-flex d-none d-sm-block">
            <i className="bi bi-search"></i>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div class="peta mt-5">
            <h4>Peta Desa</h4>
            <hr />
            <picture>
              <img
                src={require("../images/peta.jpg")}
                className="img-thumbnail"
                alt="peta"
              />
            </picture>
          </div>

          <div class="statistik-penduduk mt-5">
            <h4>Statistik Penduduk</h4>
            <hr />
            <picture>
              <img
                src={require("../images/statistik-penduduk.jpg")}
                className="img-thumbnail"
                alt="Statistik Penduduk"
              />
            </picture>
          </div>

          <div class="statistik-pengunjung mt-5">
            <h4>Statistik Pengunjung</h4>
            <hr />
            <picture>
              <img
                src={require("../images/statistik-pengunjung.jpg")}
                className="img-thumbnail"
                alt="peta"
              />
            </picture>
          </div>
        </aside>

        <div class="info mt-5 pb-5 ">
          <div class="row">
            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3">Alamat</h5>
                  <i class="bi bi-geo-alt-fill display-6 mx-auto"></i>
                  <p class="card-text mt-3">
                    <Link to={"/"}>
                      Kecamatan Surade, Kabupaten Sukabumi, Provinsi Jawa Barat,
                      Indonesia, 43179
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3">Kontak</h5>
                  <i class="bi bi-telephone-fill display-6 mx-auto "></i>
                  <p class="card-text mt-3">
                    <Link to={"/"}>+62 822 3155 5644 (Whatsapp)</Link>
                  </p>
                  <p class="card-text">
                    <Link to={"/"}>030 155 564 (Kantor)</Link>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3">Email</h5>
                  <i class="bi bi-envelope-fill display-6 mx-auto"></i>
                  <p class="card-text mt-3">
                    <a href="mailto:desa_cipeundeuy@gmail.com">
                      desa_cipeundeuy@gmail.com
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
