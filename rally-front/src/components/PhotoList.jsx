import { useContext, useEffect, useMemo, useState } from "react";
import PhotoCard from "./PhotoCard";

import NumberOfPhotosForm from "./NumberOfPhotosForm";
import { PhotoContext } from "../context/photo.context";

function PhotoList(props) {


  //Tomamos las variables que gestionan el estado del array de photos desde el contexto
  const { photos, setPhotos, getPhoto } = useContext(PhotoContext);
  useEffect(() => {
    getPhotos(1, 10);
  }, []);

  // Función para obtener múltiples fotos (pokémon) de la API sin usar async/await
  const getPhotos = (from, to) => {
    // Creamos un array vacío para almacenar todas las promesas de las peticiones
    const photoArr = [];

    // Recorremos desde 1 hasta la cantidad solicitada
    for (let i = from; i <= to; i++) {
      // Por cada índice, agregamos la promesa devuelta por getPhoto(i) al array
      // getPhoto(i) devuelve una promesa que se resolverá con los datos del pokémon (o null si falla)
      photoArr.push(getPhoto(i));
    }

    // Usamos Promise.all para esperar a que todas las promesas se resuelvan en paralelo
    Promise.all(photoArr)
      .then((results) => {
        // Una vez que todas las promesas se resuelven, filtramos los resultados no nulos
        // Esto evita que fotos con errores entren al estado
        const validPhotos = results.filter((photo) => photo !== null);

        // Actualizamos el estado con las fotos válidas
        setPhotos(validPhotos);
      })
      .catch((error) => {
        // Si hay un error general al procesar las promesas, lo mostramos por consola
        // Nota: los errores individuales se deben manejar dentro de getPhoto
        console.error("Error al obtener los datos de múltiples fotos: ", error);
      });
  };
  console.log("Photos array:", photos);
  const photoCards = useMemo( () => photos.map((photo) => {
    return (
      <PhotoCard
        key={photo.id}
        photo={photo}
        selectPhoto={props.selectPhoto}
        selectPhoto2={props.selectPhoto2}
      ></PhotoCard>
    );
  }), [photos]);
  return (
    <div className="">
      <NumberOfPhotosForm getPhotos={getPhotos} />
      <ul className="photo-list">{photoCards}</ul>
    </div>
  );
}

export default PhotoList;
