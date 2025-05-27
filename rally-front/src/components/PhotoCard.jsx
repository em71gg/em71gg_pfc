import React from "react";

function PhotoCard(props) {//renderizará las tarjetas de las fotos
  const { photo, selectPhoto, selectPhoto2 } = props; //Me llega photo de photolist

  return (
    <>
      {photo.id ? (
        <li
          className="photo-card"
          onClick={() => selectPhoto(photo)}
          onAuxClick={() => selectPhoto2(photo)}
        >
          <h2 className="photo-name">{photo.name}</h2>
          <img src={photo.sprites.back_default} alt="" className="" />
          <h3 className="text">HP: {photo.stats[0].base_stat}</h3>
        </li>
      ) : (
        <p className="loading">Cargando....</p>
      )}
    </>
  );
}



export default PhotoCard;//React.memo(PhotoCard);//
