import "./Artikel.css";
import KategoriTerkini from "../components/KategoriTerkini";
import { useEffect } from "react";
import Icon from "../components/Icon";

function Parawisata() {
  useEffect(() => {
    document.title = "Parawisata";
  }, []);

  return (
    <div className="container top-container">
      <div className="row">
        <main className="col-md-9 pb-5">
          <h1>Pantai Cimandala</h1>
          <p>Sabtu, 05 Maret 2022</p>
          <picture>
            <img
              className="img-fluid"
              src={require("../images/cimandala.jpg")}
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
          <KategoriTerkini />
        </aside>
      </div>
    </div>
  );
}

export default Parawisata;
