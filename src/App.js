import React, { useState } from "react";
import './App.css';
import Uye from "./Uye"
import Form from "./Form";

const grup= [
  {
    name: "Tuğçe",
    role: "Flütist",
    favoriteTime: "Gündüz"
  },
  {
    name: "Deniz",
    role: "Solist",
    favoriteTime: "Gece"
  },
  {
    name: "Esin",
    role: "Piyanist",
    favoriteTime: "Gündüz"
  }
]

function App() {
  const [uyeler, setUyeler] = useState(grup);

  return (
    <div className="App">
      {/* takım üyelerim listesi */}
      <div className="icerik-kutusu">

        <div className="uyeler-kutusu">

          <h2 className="uyeler-baslik">Takım Üyeleri</h2>


          <div className="uyeler-listesi">
            {uyeler.map((herbiri, index) => <Uye key={index} kisi={herbiri} />)}
          </div>
        </div>

        <div className="yeniUye-kutusu">
          <h2 className="yeniUye-baslik">Yeni Takım Üyesi Ekle</h2>
          <div className="form-kutusu beyaz-kutu">
            <Form formSubmitCalistir = {setUyeler} varOlanÜyeler={uyeler}/>
          </div>
        </div>
      </div>

      {/* yeni üye ekleme formu */}
    </div>
  );
}

export default App;