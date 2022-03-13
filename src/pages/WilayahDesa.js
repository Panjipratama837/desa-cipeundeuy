import "./Artikel.css";
import KategoriTerkini from "../components/KategoriTerkini";
import { useEffect } from "react";
import Icon from "../components/Icon";

function WilayahDesa() {
  useEffect(() => {
    document.title = "WilayahDesa";
  }, []);

  return (
    <div className="container top-container">
      <div className="row">
        <main className="col-md-9 pb-5">
          <h1>Wilayah Desa Cipeundeuy</h1>
          <p>{new Date("14 Maret 2022").toLocaleDateString()}</p>
          <picture>
            <img
              className="img-fluid"
              src={require("../images/wilayah.jpg")}
              alt="Village"
            />
          </picture>

          <div class="row">
            <div class="col-md-6">
              <table class="table table-borderless mt-3">
                <tr>
                  <th>Nama Desa</th>
                  <td>Desa Cipeundeuy Kecamatan Surade</td>
                </tr>
                <tr>
                  <th>Kepala Desa</th>
                  <td>Bakang Anwar As’adi</td>
                </tr>
                <tr>
                  <th>Luas Wilayah</th>
                  <td>1286 Ha</td>
                </tr>
              </table>
              <hr />
              <p className="text-center">
                <b>Batas Wilayah</b>
              </p>
              <table class="table table-borderless mt-3">
                <tr>
                  <th>Sebelah Utara</th>
                  <td>Desa Gunungsungging</td>
                </tr>
                <tr>
                  <th>Sebelah Selatan</th>
                  <td>Samudera Indonesia</td>
                </tr>
                <tr>
                  <th>Sebelah Barat</th>
                  <td>Desa Buniwangi</td>
                </tr>
                <tr>
                  <th>Sebelah Timur</th>
                  <td>Desa Sukatani</td>
                </tr>
              </table>
            </div>

            <div class="col-md-6">
              <table class="table table-borderless mt-3">
                <tr>
                  <th>Jumlah Rumah Penduduk</th>
                  <td>1.230 Rumah</td>
                </tr>
                <tr>
                  <th>Jumlah Penduduk</th>
                  <td>4.613 Orang</td>
                </tr>
                <tr>
                  <th>Jumlah RT/RW</th>
                  <td>21 RT / 6 RW</td>
                </tr>
                <tr>
                  <th>Kantor Pemerintah Desa</th>
                  <td>1 Buah</td>
                </tr>
                <tr>
                  <th>Luas Tanah</th>
                  <td>2500 M</td>
                </tr>
                <tr>
                  <th>Luas Bangunan</th>
                  <td>180 M</td>
                </tr>
                <tr>
                  <th>Tahun Dibuat</th>
                  <td>1984</td>
                </tr>
                <tr>
                  <th>Jumlah Dusun</th>
                  <td>
                    <ul>
                      <li>Dusun Leuwicagak</li>
                      <li>Dusun Cipeundeuy</li>
                      <li>Dusun Cimandala</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <Icon />
        </main>

        <aside className="col-md-3">
          <KategoriTerkini />
        </aside>
      </div>
    </div>
  );
}

export default WilayahDesa;
