import axios from "axios";
import { useState, useEffect } from "react";

function PhotoHome() {
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1", { withCredentials: false })
      .then((response) => {
        console.log(response.data);
        setPhoto(response.data);
      });
  }, []);
  return (
    <>
      {photo.id ? (
        <li className="photo-card">
          <h2 className="photo-name">{photo.name}</h2>
          <img src={photo.sprites.front_default} alt="" className="" />
          <h3>HP: {photo.stats[0].base_stat}</h3>
        </li>
      ) : (
        <p>Cargando....</p>
      )}
    </>
  );
}

export default PhotoHome;
