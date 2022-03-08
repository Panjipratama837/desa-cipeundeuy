import "./Artikel.css";
import KategoriTerkini from "../components/KategoriTerkini";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Icon from "../components/Icon";
import dataArtikel from "../data-artikel/artikel.json";

function ArtikelDetail() {
  const params = useParams();
  const [article] = useState(dataArtikel);

  useEffect(() => {
    document.title = "Artikel Detail";
  }, []);

  console.log(dataArtikel);
  console.log(params.id);

  return (
    <div className="container mt-5">
      <div className="row">
        <main className="col-md-9 pb-5">
          <h1>{article[params.id - 1].judul}</h1>
          <p>{new Date(article[params.id - 1].tanggal).toLocaleDateString()}</p>
          <picture>
            <img
              className="img-fluid"
              src={window.location.origin + article[params.id - 1].gambar}
              alt={article[params.id - 1].judul}
            />
          </picture>

          <article className="mt-2">
            <p>{article[params.id - 1].content}</p>
          </article>
          <Icon />
        </main>

        <aside className="col-md-3">
          <KategoriTerkini />
        </aside>
      </div>
    </div>
  );
}

export default ArtikelDetail;
