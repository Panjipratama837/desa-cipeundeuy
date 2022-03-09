import "./Artikel.css";
import { useEffect, useState } from "react";
import "./Beranda.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import dataArtikel from "../data-artikel/artikel.json";

function Beranda() {
  const [articles] = useState(dataArtikel);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Beranda";
  }, []);
  console.log(dataArtikel);

  const articlePerPage = 4;
  const pagesVisited = pageNumber * articlePerPage;

  const filterArticles = articles.filter((article) => {
    return article.judul.toLowerCase().includes(search.toLowerCase());
  });

  const displayArticles = filterArticles
    .slice(pagesVisited, pagesVisited + articlePerPage)
    .map((article) => {
      return (
        <div className="row mt-5" key={article.id}>
          <div className="col-md-4">
            <picture>
              <img
                src={article.gambar}
                className="img-thumbnail"
                alt={article.judul}
              />
            </picture>
          </div>
          <div className="col-md-8">
            <h4>{article.judul}</h4>
            <p>{new Date(article.tanggal).toLocaleDateString()}</p>
            <p className="text-muted">{article.summary}</p>
            <Link to={`artikel/${article.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(articles.length / articlePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container top-container ">
      <div className="row">
        <main className="col-md-9">
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

          <div className="artikel mt-5">
            <h3>Berita Terkini</h3>
            <hr />
            <form className="form d-flex">
              <i className="bi bi-search"></i>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cari judul artikel ..."
                aria-label="Search"
                onChange={handleSearch}
              />
            </form>
            {displayArticles}
          </div>

          <ReactPaginate
            previousLabel="&lt;"
            nextLabel="&gt;"
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={changePage}
            containerClassName="pagination justify-content-end"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            breakClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </main>

        <aside className="col-md-3">
          <div className="peta">
            <h4>Peta Desa</h4>
            <hr />
            <picture data-bs-toggle="modal" data-bs-target="#desa">
              <img
                src={require("../images/peta.jpg")}
                className="img-thumbnail img-modal"
                alt="peta"
              />
            </picture>

            <div
              className="modal fade "
              id="desa"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Peta Desa
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <picture>
                      <img
                        src={require("../images/peta.jpg")}
                        className="img-fluid"
                        alt="peta"
                      />
                    </picture>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="statistik-penduduk mt-5">
            <h4>Statistik Penduduk</h4>
            <hr />
            <picture data-bs-toggle="modal" data-bs-target="#penduduk">
              <img
                src={require("../images/statistik-penduduk.jpg")}
                className="img-thumbnail img-modal"
                alt="peta"
              />
            </picture>

            <div
              className="modal fade "
              id="penduduk"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Statistik Penduduk
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <picture>
                      <img
                        src={require("../images/statistik-penduduk.jpg")}
                        className="img-fluid"
                        alt="statistik-penduduk"
                      />
                    </picture>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="statistik-pengunjung mt-5">
            <h4>Statistik Pengunjung</h4>
            <hr />
            <picture data-bs-toggle="modal" data-bs-target="#pengunjung">
              <img
                src={require("../images/statistik-pengunjung.jpg")}
                className="img-thumbnail img-modal"
                alt="peta"
              />
            </picture>

            <div
              className="modal fade "
              id="pengunjung"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Statistik Pengunjung
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <picture>
                      <img
                        src={require("../images/statistik-pengunjung.jpg")}
                        className="img-fluid"
                        alt="peta"
                      />
                    </picture>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="info mt-5 pb-5 " id="kontak">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3">Alamat</h5>
                  <i className="bi bi-geo-alt-fill display-6 mx-auto"></i>
                  <p className="card-text mt-3">
                    <a
                      href="https://goo.gl/maps/z5FHEFRWNasS3NZM9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kecamatan Surade, Kabupaten Sukabumi, Provinsi Jawa Barat,
                      Indonesia, 43179
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3">Kontak</h5>
                  <i className="bi bi-telephone-fill display-6 mx-auto "></i>
                  <p className="card-text mt-3">
                    <a
                      href="https://wa.me/6282231555644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +62 822 3155 5644 (Whatsapp)
                    </a>
                  </p>
                  <p className="card-text">
                    <Link to={"/"}>030 155 564 (Kantor)</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3">Email</h5>
                  <i className="bi bi-envelope-fill display-6 mx-auto"></i>
                  <p className="card-text mt-3">
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
