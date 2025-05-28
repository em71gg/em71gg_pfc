import { useContext } from "react";
import { DateContext } from "../context/date.context";

function RallyCardsWrapper(RallyCardsComponent) {
  function NewComponent(props) {
    const { rally } = props;
    const { formatDate } = useContext(DateContext);
  }
  return (
    <div className="">
      <h3 className="title">{rally.nombre}</h3>
      <p className="">Categoria : {rally.category.nombre}</p>
      <p className="">{rally.descripcion}</p>
    </div>
  );
}

export default RallyCardsWrapper;
