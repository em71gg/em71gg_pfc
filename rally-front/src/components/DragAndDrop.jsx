import { useRef, useState } from "react";
import "./DragAndDrop.css"; // o usa Tailwind para estilos rápidos

function DragAndDrop() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    setFiles(Array.from(droppedFiles));
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(Array.from(selectedFiles));
  };

  const handleUpload = () => {
    console.log("Uploading...", files);
    // Aquí falta la subida con axios
  };

  const handleCancel = () => {
    setFiles([]);
    inputRef.current.value = null;
  };

  return (
    <div className="container">
      {files.length > 0 ? (
        <div className="upload-box">
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
          <div className="actions">
            <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
            <button className="btn upload" onClick={handleUpload}>Subir</button>
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
  );
}

export default DragAndDrop;

/*import { useRef, useState } from "react";
import "./DragAndDrop.css";

function DragAndDrop() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(Array.from(droppedFiles));
  };

  const handleUpload = () => {
    console.log("Uploading: ", files);
    // Aquí va tu lógica de subida al servidor
  };

  if (files.length > 0)
    return (
      <div className="uploads">
        <ul>
          {files.map((file, index) => (
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
        onChange={(event) => setFiles(Array.from(event.target.files))}
      />
      <button onClick={() => inputRef.current.click()}>Seleccione</button>
    </div>
  );
}

export default DragAndDrop;
*/