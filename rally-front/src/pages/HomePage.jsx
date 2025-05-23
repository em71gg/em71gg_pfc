import './HomePage.css';
import { useContext, useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';
import Register from '../components/RegisterForm';
import HeaderComponent from '../components/HeaderComponent';
import PhotoHome from '../components/PhotoHome';
import { HeaderContext } from '../context/header.context';

function HomePage() {
    const {greetings, links} = useContext(HeaderContext);
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      console.log('Ejecución al cambiarcount');
    },[count])

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PhotoHome />
      < Link to='/rally' className='link'>Rally</Link>
    </>
  )
}

export default HomePage