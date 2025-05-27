import axios from "axios";
import { useContext, useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PhotoCard from "../components/PhotoCard";
import PhotoList from "../components/PhotoList";
import PhotoDetails from "../components/PhotoDetails";
import PhotoDetails2 from "../components/PhotoDetails2";

import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { HeaderContext } from "../context/header.context";
import { RallyContext } from "../context/rally.context";

function RallyPage() {

  const {id} = useParams();
  
  const {user, setUser} = useContext(UserContext);
  const {links, greetings} = useContext(HeaderContext);
  const {rallies} = useContext(RallyContext);

  const actualRally = rallies.find(rally => rally.id === parseInt(id)); //useParams siempre devuelve un string, por eso parseInt(id)

  if(!actualRally) return <Navigate to={'/error'} />

  console.log('RallyPage renderizado');

  if (!user.isLoggedIn) return <Navigate to={'/error'} />
  console.log(`El valor de isLoggedin es: ${user.isLoggedIn}, y el de name: ${user.name}`)
 

  const [selectedPhoto, setSelectedPhoto] = useState(); //variable que gestiona la photo seleccionada
  const [selectedPhoto2, setSelectedPhoto2] = useState();

 
 
  return (
  
     <main className="">
        <HeaderComponent greetings={greetings} links={links} />
        <section className="">
          <h2 className="">Hola {user.name}</h2>
          <button onClick={()=> setUser({...user, name: 'Maria'})}>Cambiar nombre</button>
        </section>
        <section className="">
          <h2 className="">Despliegue del rally con id {id} y nombre {actualRally.nombre}</h2>
        </section>
        {selectedPhoto && ( //si se ha seleccionado una foto se muestra a través del componente PhotoDetails al que le pasamos la foto seleccionada a través de un prop
          <div className="photo-selected">
            <h2>Foto seleccionada</h2>
              <PhotoDetails photo={selectedPhoto} />
          </div>
        )}
        {selectedPhoto2 && ( //si se ha seleccionado una foto se muestra a través del componente PhotoDetails al que le pasamos la foto seleccionada a través de un prop
          <div className="photo-selected">
            <h2>Foto seleccionada</h2>
            <PhotoDetails2 photo={selectedPhoto2} />
          </div>
        )}
        <div>
          <h2 className="">Lista de photos</h2>
          <PhotoList
            selectPhoto={setSelectedPhoto}
            selectPhoto2={setSelectedPhoto2}
          />
        </div>
     </main>
  );
}

export default RallyPage;
