import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    favoriteTime: "",
  });

  const { formSubmitCalistir, varOlanÜyeler } = props;
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <form
      style={{
        paddingLeft : "4rem"
      }}
      method="POST"
        onSubmit={(e) => {
          console.log(e.target.value);
          e.preventDefault();
          formSubmitCalistir([...varOlanÜyeler, formData]);
        }}
      >
        <div>
          <label htmlFor="name">
            <p className= "pMargin strong">İsim</p>
            <input
            className="borderNone"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            <p className="pMargin strong"> Takımdaki Rolü </p>
            <select
              name="role"
              id="role"
              onChange={handleInputChange}
              value={formData.role}
              style={{padding:"0.2rem 1rem"}}
            >
              <option value="">Seçiniz</option>
              <option value="fltst">Flütist</option>
              <option value="slst">Solist</option>
              <option value="pynst">Piyanist</option>
              <option value="Gitarist">Gitarist-</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <p className="pMargin strong">Favori Zaman</p>
          </label>
          <label htmlFor="radioGece">Gece</label>
          <input
            type="radio"
            id="radioGece"
            name="favoriteTime"
            value="Gece"
            onChange={handleInputChange}
            //   onChecked={formData.favoriteTime === "Gece"}
          ></input>

          <label htmlFor="radioGündüz">Gündüz</label>

          <input
            type="radio"
            id="radioGündüz"
            name="favoriteTime"
            value={"Gündüz"}
            onChange={handleInputChange}
            //   checked={formData.favoriteTime === "Gündüz"}
          ></input>
        </div>
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

//