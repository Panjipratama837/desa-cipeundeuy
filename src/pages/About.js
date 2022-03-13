import "./Artikel.css";
import KategoriTerkini from "../components/KategoriTerkini";
import { useEffect } from "react";
import Icon from "../components/Icon";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  const kepalaDesa = [
    {
      id: "1",
      nama: "Ahud",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "2",
      nama: "Samudin",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "3",
      nama: "Arga Wijaya",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "4",
      nama: "Sumawinata",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "5",
      nama: "Ogin Sarbini",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "6",
      nama: "Johob",
      keterangan: "Masa Republik",
    },

    {
      id: "7",
      nama: "Sahroni",
      keterangan: "Masa NICA",
    },

    {
      id: "8",
      nama: "Atmaja",
      keterangan: "Masa Penyerahan Kedaultan RIS",
    },

    {
      id: "9",
      nama: "U. Supandi",
      keterangan: "Masa ORLA",
    },

    {
      id: "10",
      nama: "Junaedi",
      keterangan: "Masa ORLA",
    },

    {
      id: "11",
      nama: "Atmaja",
      keterangan: "Masa ORLA",
    },

    {
      id: "12",
      nama: "H. Syarif",
      keterangan: "Masa ORBA",
    },

    {
      id: "13",
      nama: "Mamad",
      keterangan: "Masa ORBA",
    },

    {
      id: "14",
      nama: "Wawan Ruswanda",
      keterangan: "Masa Reformasi",
    },

    {
      id: "15",
      nama: "Didi Ruswandi",
      keterangan: "Masa Reformasi",
    },

    {
      id: "16",
      nama: "Wawan Ruswanda",
      keterangan: "Masa Reformasi",
    },

    {
      id: "17",
      nama: "Kuswandi",
      keterangan: "Masa Reformasi",
    },

    {
      id: "18",
      nama: "Bakang Anwar As’adi",
      keterangan: "Masa Reformasi Sekarang",
    },
  ];

  const displayKepalaDesa = kepalaDesa.map((item) => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.nama}</td>
        <td>{item.keterangan}</td>
      </tr>
    );
  });

  return (
    <div className="container top-container">
      <div className="row">
        <main className="col-md-9 pb-5">
          <h1>Sejarah Desa Cipeundeuy</h1>
          <p>{new Date("14 Maret 2022").toLocaleDateString()}</p>
          <picture>
            <img
              className="img-fluid"
              src={require("../images/about.jpg")}
              alt="Village"
            />
          </picture>

          <article className="mt-2">
            <p>
              Desa Cipeundeuy merupakan salah satu desa yang ada di kecamatan
              surade yang memiliki penduduk berjumlah 4613 orang dan hampir 80 %
              penduduk bekerja sebagai petani. Desa Cipendeuy memiliki luas
              sebesar 1286 Ha dengan jumlah rumah penduduk yaitu sekitar 1230
              rumah dan dibagi ke 3 dusun yaitu Dusun Leuwicagak, Dusun
              Cipeundeuy dan Dusun Cimandala. Dikarenakan memiliki posisi yang
              kurang agak jauh dari pusat pemerintahan indonesia, Akses jalan ke
              potensi - potensi pariwisata desa ini masih membutuhkan perbaikan
              yang signifikan agar dapat dengan mudah di akses sehingga dapat
              meningkatkan ekonomi warga desa.
            </p>
          </article>

          <h5 className="mt-5">
            Nama - nama yang pernah menjabat menjadi Kepala Desa Cipeundeuy
          </h5>

          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Kepala Desa</th>
                <th scope="col">Keterangan</th>
              </tr>
            </thead>
            <tbody>{displayKepalaDesa}</tbody>
          </table>
          <Icon />
        </main>

        <aside className="col-md-3">
          <KategoriTerkini />
        </aside>
      </div>
    </div>
  );
}

export default About;
