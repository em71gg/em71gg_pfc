
import DetailsWrapper from "../hoc/DetailsWrapper";
import { Link } from "react-router-dom";

function PhotoDetails(props) {
    const {photo, likes, increaseLikes} = props;
    
  return (
    <section className="selected-photo">
 <h1 className="">Photo 2</h1>
      
        <div className="photo-container2">
            
            <h2 className="text">{photo.name}</h2>
            <img src={photo.sprites.front_default} alt="" className="photo-img" />
            <h3 className="text">HP: {photo.stats[0].base_stat}</h3>
        </div>
        <h3 className="">Likes: {likes} <button onClick={increaseLikes}>+</button></h3>
        <Link to={`/photo/${photo.id}`}>Ver detalles</Link>
    </section>
  )
}

export default DetailsWrapper(PhotoDetails) 