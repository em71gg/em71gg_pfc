import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RallyContext } from "../context/rally.context";
import { HeaderContext } from "../context/header.context";
import { UserContext } from "../context/user.context";
import HeaderComponent from "../components/HeaderComponent";

function RallyToBePage() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const { rallies } = useContext(RallyContext);
  const { links, greetings } = useContext(HeaderContext);
  const [register, setRegister] = useState(false);
  

  const actualRally = rallies.find((rally) => rally.id === parseInt(id)); //useParams siempre devuelve un string, por eso parseInt(id)
  console.log("El Rally es :", actualRally);
  if (!actualRally) {
    console.log("No existe el rally");
    return <Navigate to={"/error"} />;
  }
  if (!user.isLoggedIn) return <Navigate to={"/error"} />;
  console.log(
    `El valor de isLoggedin es: ${user.isLoggedIn}, y el de name: ${user.name}`
  );

  return (
    <>
      <HeaderComponent greetings={greetings} links={links} />
      <main className="">
        <section className="">
          <h2 className="">Hola {user.name}</h2>
        </section>
        <section className="">
          <h2 className="">
            Despliegue del rally con id {id} y nombre {actualRally.nombre}
          </h2>
          <h3 className="">
            Descripcion del rally
          </h3>
          <p className="">{actualRally.descripcion}</p>
        </section>
        <section className="">
          <button onClick={() => setRegister(!register)}>Registarse</button>
          {register && <p className="">quiero registrarme</p>}
        </section>
      </main>
    </>
  );
}

export default RallyToBePage;
