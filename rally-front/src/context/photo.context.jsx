import axios from "axios";
import { createContext, useState } from "react";

const PhotoContext = createContext(); //variable que aloja la función que crea el contexto

function PhotoProviderWrapper(props) {
    const [photos, setPhotos] = useState([]);

    const postPhoto =() => {}; 
    
    const getPhoto = (index) => {
        return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${index}`, {
            withCredentials: false,
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            
            console.error("Error al cargar los datos", error.message || error);
           
        });
    };
    return (
        <PhotoContext.Provider value={{photos, setPhotos, getPhoto, postPhoto}}>
            {props.children} 
        </PhotoContext.Provider>
    )
}

export {PhotoContext, PhotoProviderWrapper};