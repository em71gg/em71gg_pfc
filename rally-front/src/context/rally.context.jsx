import { createContext, useContext, useState } from "react";
import { DateContext } from "./date.context";

const RallyContext = createContext();
function RallyProviderWrapper(props) {
  const { formDate } = useContext(DateContext);
  const [rallies, setRallies] = useState([
    //esto debe venir del fetch
    {
      id: 1,
      uri_img: "http://dfdgfgagasgag",
      validado: 1,
      nombre: "Rally de Primavera",
      category_id: 2,
      descripcion: "Fotografía natural",
      fecha_inicio: "2025-05-01T00:00:00.000000Z",
      fecha_fin: "2025-06-10T00:00:00.000000Z",
      category: {
        id: 2,
        nombre: "Naturaleza",
      },
      premio1: 1500,
      premio2: 1000,
      premio3: 500,
      limite_fotos: 3,
      limite_votos: 3,
    },
    {
      id: 2,
      uri_img: "http://dfdgfgagasgag",
      validado: 1,
      nombre: "Rally Rociero",
      category_id: 2,
      descripcion: "Fotografía del camnnio del rocio",
      fecha_inicio: "2025-06-01T00:00:00.000000Z",
      fecha_fin: "2025-06-10T00:00:00.000000Z",
      category: {
        id: 2,
        nombre: "Naturaleza",
      },
      premio1: 1500,
      premio2: 1000,
      premio3: 500,
      limite_fotos: 3,
      limite_votos: 3,
    },
    {
      id: 3,
      uri_img: "http://dfdgfgagasgag",
      validado: 0,
      nombre: "Rally Ciudadano",
      category_id: 1,
      descripcion: "Fotografía de los que van en metro",
      fecha_inicio: "2025-06-01T00:00:00.000000Z",
      fecha_fin: "2025-06-10T00:00:00.000000Z",
      category: {
        id: 1,
        nombre: "Sociedad",
      },
      premio1: 1500,
      premio2: 1000,
      premio3: 500,
      limite_fotos: 3,
      limite_votos: 3,
    },
  ]);
  const [registered, setRegistered] = useState(false);
  const registerParticipantOnRally = (rallyId, userId) => {
    setRegistered(!registered);
    //llamar a la funcion de registro
    console.log(`Usuario ${userId} registrado en el rally ${rallyId}`);
    
  };

  const displayRallyInfoToParticipant = (containerId, rallyData) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`El contenedor con id '${containerId}' no existe"`);
      return;
    }
    container.innerHTML = `
        <h3>Rally ${rallyData.nombre}</h3>
        <p>Descripcion: ${rallyData.descripcion}</p>
        <h2 className="">
            Despliegue del rally con id {id} y nombre ${rallyData.nombre}.
          </h2>
          <h3 className="">Descripcion del rally</h3>
          <p className="">${rallyData.descripcion}.</p>
          <p className=""><strong>Categoria:</strong> ${rallyData.category.nombre}.</p>
          <p className=""><strong>Limite de fotos:</strong> ${rallyData.limite_fotos}.</p>
          <p className=""><strong>Primer Premio:</strong> ${rallyData.premio1}.</p>
          <p className=""><strong>Segundo Premio:</strong> ${rallyData.premio2}.</p>
          <p className=""><strong>Tercer Premio:</strong> ${rallyData.premio3}.</p>
          <p className=""><strong>Inicio:</strong> ${rallyData.fecha_inicio}. </p>
          <p className=""><strong>Fin:</strong> ${rallyData.fecha_fin}. </p>
        
        `;
  };

  return (
    <RallyContext.Provider
      value={{
        rallies,
        setRallies,
        registerParticipantOnRally,
        registered,
        setRegistered,
        displayRallyInfoToParticipant,
      }}
    >
      {props.children}
    </RallyContext.Provider>
  );
}
export { RallyContext, RallyProviderWrapper };
