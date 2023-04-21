import React from "react";
import { useState } from "react";
import { Input, Label } from "reactstrap";

export default function CitySearch(props) {
  const [searchCity, setSearchCity] = useState("");

  const handleInputCity = (event) => {
    const city = event.target.value;
    setSearchCity(city);
    props.onSearch(city);
    console.log("city:" + city);
  };

  return (
    <form>
      <Label>Buscar por ciudad:</Label>
      <Input
        className="input-style"
        type="text"
        id="campo_de_ciudad"
        onChange={handleInputCity}
        placeholder="Ingrese el nombre de la ciudad..."
      />
    </form>
  );
}
