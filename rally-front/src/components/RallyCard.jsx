import { Link } from "react-router-dom";

function RallyCard(props) {
  const { rally } = props;
  return (
    <div className="">
      <h3 className="title">{rally.nombre}</h3>
      <p className="">Categoria : {rally.category.nombre}</p>
      <p className="">{rally.descricion}</p>
      <p className="">
        Duración desde : {rally.fecha_inicio}, hasta {rally.fecha_fin}
      </p>
      <Link to={`/rally/${rally.id}`}>Ir a {rally.nombre}</Link>
    </div>
  );
}

export default RallyCard;
