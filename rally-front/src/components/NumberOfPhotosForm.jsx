import { useState } from "react"


function NumberOfPhotosForm(props) {
    const [photosParams, setPhotosParams] = useState({
        fromPhoto: "",
        toPhoto: ""
    });

    const handleInputs = (event) =>{
        const {id, value} = event.target;
        setPhotosParams((prevParams) => ({
            ...prevParams,
            [id]: value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getPhotos(Number(photosParams.fromPhoto), Number(photosParams.toPhoto));//llama a la funcion a traves de los props
        
    }

  return (
    <form  className="" onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="fromPhoto" className="">From:</label>
            <input type="number" className="" id='fromPhoto' min={1} onChange={handleInputs}/>
        </fieldset>
        <fieldset>
            <label htmlFor="toPhoto" className="">From:</label>
            <input type="number" className="" id='toPhoto' min={2} onChange={handleInputs}/>
        </fieldset>
        <button className="">Get Photos</button>
    </form>
  )
}

export default NumberOfPhotosForm