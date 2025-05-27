import './HomePage.css';
import { useContext, useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';

import HeaderComponent from '../components/HeaderComponent';
import PhotoHome from '../components/PhotoHome';
import { HeaderContext } from '../context/header.context';
import RallyCardDisplay from '../components/RallyCardDisplay';

function HomePage() {
    const {greetings, links} = useContext(HeaderContext);
   
    
  

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi front experimental</h1>
      <h2 className="">Practicando con pokemons, ¿llegaremos al final? O no...Si!</h2>
      <section className="rally-to-be">
        <RallyCardDisplay />
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PhotoHome />
      < Link to='/rally' className='link'>Rally</Link>
    </>
  )
}

export default HomePage