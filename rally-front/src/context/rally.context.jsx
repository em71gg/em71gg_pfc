import { createContext, useState } from "react";

const RallyContext = createContext();
function RallyProviderWrapper(props) {
    const [rallies, setRallies] = useState([
            {
                "id": 1,
                "validado":1,
                "nombre": "Rally de Primavera",
                "category_id": 2,
                "descripcion": "Fotografía natural",
                "fecha_inicio": "2025-06-01T00:00:00.000000Z",
                "fecha_fin": "2025-06-10T00:00:00.000000Z",
                "category": {
                "id": 2,
                "nombre": "Naturaleza"
                }
            },
            {
                "id": 2,
                "validado":1,
                "nombre": "Rally Rociero",
                "category_id": 2,
                "descripcion": "Fotografía del camnnio del rocio",
                "fecha_inicio": "2025-06-01T00:00:00.000000Z",
                "fecha_fin": "2025-06-10T00:00:00.000000Z",
                "category": {
                "id": 2,
                "nombre": "Naturaleza"
                }
            },
             {
                "id": 3,
                "validado":0,
                "nombre": "Rally Ciudadano",
                "category_id": 1,
                "descripcion": "Fotografía de los que van en metro",
                "fecha_inicio": "2025-06-01T00:00:00.000000Z",
                "fecha_fin": "2025-06-10T00:00:00.000000Z",
                "category": {
                "id": 1,
                "nombre": "Sociedad"
                }
            },
    ]);

    return(
        <RallyContext.Provider value={{rallies, setRallies}}>
            {props.children}
        </RallyContext.Provider>
    )
}
export {RallyContext, RallyProviderWrapper}