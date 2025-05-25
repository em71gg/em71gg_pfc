import { useEffect, useRef, useState } from "react";
import "./DragAndDrop.css"; // o usa Tailwind para estilos rápidos

function DragAndDrop(props) {

  useEffect(() =>{
    //pendiente de lógica de carga de datos del rally_id del Numero de fotos5
  }, []);
  const [file, setFile] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef();
  const [name, setName] = useState("")

  const setPhotoName = (event) => {
    
    setName(event.target.value); 
  }

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files;
    setFile(Array.from(droppedFile));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files;
    setFile(Array.from(selectedFile));
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    (file.length >0) && (formData.append('file', file[0]))
    for (let [key, value] of formData.entries()) {
      console.log('Uploading.... ',`${key}:`, value);
    }
    //console.log("Uploading...", formData);
    // Aquí falta la subida con axios
  };

  const handleCancel = () => {
    setFile([]);
    inputRef.current.value = null;
  };

  return (
   <section className="photo-data">
    <h2 className="">Subir foto</h2>
    <form action="" className="" onSubmit={handleUpload}>
      <div className="photodata">
        <label htmlFor="photo-name" className="photo-name">Título de la foto</label>
        <input type="text" className="photo-name" id="photo-name" onChange={setPhotoName}/>
      </div>
      <div className="container">
        {file.length > 0 ? (
          <div className="upload-box">
            <ul>
              {file.map((file, i) => (
                <li key={i}>{file.name}</li>
              ))}
            </ul>
            <div className="actions">
              <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
              {/*<button className="btn upload" onClick={handleUpload}>Subir</button>*/}
            </div>
          </div>
        ) : (
          <div
            className={`dropzone ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p>Suelta tu archivo aquí</p>
            <p>o</p>
            <input
              type="file"
              ref={inputRef}
              hidden
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <button onClick={() => inputRef.current.click()}>Seleccionar archivo</button>
          </div>
        )}
      </div>
      <button type="submit">Enviar foto</button>
    </form>
    
   </section>
    
  );
}

export default DragAndDrop;

/*import { useRef, useState } from "react";
import "./DragAndDrop.css";

function DragAndDrop() {
  const [file, setFiles] = useState([]);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.file;
    setFiles(Array.from(droppedFiles));
  };

  const handleUpload = () => {
    console.log("Uploading: ", file);
    // Aquí va tu lógica de subida al servidor
  };

  if (file.length > 0)
    return (
      <div className="uploads">
        <ul>
          {file.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles([])}>Cancelar</button>
          <button onClick={handleUpload}>Subir</button>
        </div>
      </div>
    );

  return (
    <div
      className="dropzone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>Suelte el archivo</h3>
      <h3>O</h3>
      <input
        type="file"
        multiple
        hidden
        accept="image/*"
        ref={inputRef}
        onChange={(event) => setFiles(Array.from(event.target.file))}
      />
      <button onClick={() => inputRef.current.click()}>Seleccione</button>
    </div>
  );
}

export default DragAndDrop;
*/