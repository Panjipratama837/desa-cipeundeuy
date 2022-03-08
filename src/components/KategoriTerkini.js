import { Link } from "react-router-dom";

function KategoriTerkini() {
  return (
    <>
      <div className="row">
        <div className="kategori mt-5 col-6 col-md-12">
          <h4>Kategori</h4>
          <ul className="list-unstyled">
            <li>
              <Link to={"/"}>Kategori 1</Link>
            </li>
            <li>
              <Link to={"/"}>Kategori 2</Link>
            </li>
            <li>
              <Link to={"/"}>Kategori 3</Link>
            </li>
            <li>
              <Link to={"/"}>Kategori 4</Link>
            </li>
          </ul>
        </div>

        <div className="terkini mt-5 col-6 col-md-12">
          <h4>Terkini</h4>
          <ul className="list-unstyled">
            <li>
              <Link to={"/"}>Terkini 1</Link>
            </li>
            <li>
              <Link to={"/"}>Terkini 2</Link>
            </li>
            <li>
              <Link to={"/"}>Terkini 3</Link>
            </li>
            <li>
              <Link to={"/"}>Terkini 4</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default KategoriTerkini;
