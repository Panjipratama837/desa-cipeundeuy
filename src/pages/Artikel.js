import "./Artikel.css";
import KategoriTerkini from "../components/KategoriTerkini";
import { useEffect } from "react";
import Icon from "../components/Icon";

function Artikel() {
  useEffect(() => {
    document.title = "Artikel";
  }, []);

  return (
    <div className="container mt-5">
      <div class="row">
        <main className="col-md-9 pb-5">
          <form className="form d-flex d-block d-sm-none mb-3">
            <i className="bi bi-search"></i>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <h1>Judul Artikel</h1>
          <p>Sabtu, 05 Maret 2022</p>
          <picture>
            <img
              className="img-fluid"
              src={require("../images/01.jpg")}
              alt="Village"
            />
          </picture>

          <article className="mt-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              officiis, nostrum recusandae neque quaerat autem ratione excepturi
              mollitia vel, optio accusantium. Magni similique, quidem rem,
              nulla doloremque assumenda, neque vel blanditiis cupiditate
              debitis hic. Eligendi, molestias odit animi reiciendis
              exercitationem laudantium! Perspiciatis, sed! Voluptas ab amet
              hic, quaerat tenetur ipsum ratione unde mollitia eveniet! Dolore,
              distinctio? Voluptatum iste minus dolore enim illum! Reprehenderit
              molestiae eos facilis ab, dolorum quidem commodi sit at. Rem,
              similique optio. Officiis libero omnis quia, quod, in repudiandae
              asperiores sunt eaque ullam, sapiente nesciunt quisquam
              consequuntur! Ducimus adipisci porro repellendus perspiciatis
              distinctio amet modi molestias hic!
            </p>
          </article>
          <Icon />
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

          <KategoriTerkini />
        </aside>
      </div>
    </div>
  );
}

export default Artikel;