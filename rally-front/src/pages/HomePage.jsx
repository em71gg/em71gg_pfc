import "./HomePage.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import PhotoHome from "../components/PhotoHome";
import { HeaderContext } from "../context/header.context";
import { RallyContext } from "../context/rally.context";
import RallyCard from "../components/RallyCard";

function HomePage() {
  const { greetings, links } = useContext(HeaderContext);
  const { rallies, setRallies } = useContext(RallyContext);

  const rallyCards = rallies.map((rally) => {
    return (
      <li className="rallies-list" key={rally.id}>
        <RallyCard rally={rally} />
      </li>
    );
  });

  return (
    <>
      <HeaderComponent greetings={greetings} links={links} />

      <h1>Mi front experimental</h1>
      <h2 className="">
        Practicando con pokemons, ¿llegaremos al final? O no...Si!
      </h2>
      <section className="rally-to-be">
        <h2 className="">Listado de futuros rallies</h2>
        <ul className="">
          {rallyCards}
        </ul>
        
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PhotoHome />
      <Link to="/rally" className="link">
        Rally
      </Link>
    </>
  );
}

export default HomePage;
