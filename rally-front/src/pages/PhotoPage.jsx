import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { PhotoContext } from "../context/photo.context";
import { HeaderContext } from "../context/header.context";

function PhotoPage() {
  const {greetings, links} = useContext(HeaderContext);
  const { getPhoto } = useContext(PhotoContext);
  
  const { id } = useParams(); //valor del parametro de la ruta
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState();
  useEffect(() => {
    id && callGetPhoto();
  }, [id]);//cada vez que se modifique el id se hace la llamada a la función para cargar la foto

  const callGetPhoto = () => {
    getPhoto(id).then((response) => {

      if(response) {
        setPhoto(response);
        setError(null);
      }else{
        setError("No se encontró el Pokémon.");
        setPhoto(null);
      }
    });
  };
  const navigate = useNavigate();
  const goTo = (id) => {
    navigate(`/photo/${id}`);
  };

  return (
    <>
      <HeaderComponent greetings={greetings} links={links} />
      <section className="" id="photo-page">
        {error ? (
          <div className="">
            <h2 className="">No se ha creado ningun Pokemon</h2>
            <Link to="/rally">Volver a la pagina de rally</Link>
          </div>
        ) : (
          <>
            {photo ? (
              <div className="">
                <h2 className="">{photo.name.toUpperCase()}</h2>
                <img
                  src={photo.sprites.front_default}
                  alt={photo.name}
                  className=""
                />
              </div>
            ) : (
              <div className="">Cargando...</div>
            )}
          </>
        )}
      </section>
      <div className="">
        <button className="" onClick={() => goTo(Number(id) - 1)}>
          Atras
        </button>
        <button className="" onClick={() => goTo(Number(id) + 1)}>
          Adelante
        </button>
      </div>
    </>
  );
}

export default PhotoPage;
