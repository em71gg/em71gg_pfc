import { useState } from "react";

function DetailsWrapper(DetailsComponent) {
  function NewComponent(props) {
    //contienen la lógica común
    const [likes, setLikes] = useState(0);
    
    const increaseLikes = () => {
      setLikes(likes + 1);
    };

    return (
      <DetailsComponent
        photo={props.photo}
        likes={likes}
        increaseLikes={increaseLikes}
      />
    );
  }

  return NewComponent;
}

export default DetailsWrapper;
