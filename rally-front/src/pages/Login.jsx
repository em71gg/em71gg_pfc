
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent'
import LoginForm from '../components/LoginForm'
import { useContext } from "react";
import { HeaderContext } from '../context/header.context';

function Login() {
    const {greetings, links} = useContext(HeaderContext);
   
    
  return (
    <>
    <HeaderComponent greetings={greetings} links={links}/>
    <LoginForm />
    <Link to={'/user'}>Ir a página de usuario</Link>
    </>
  )
}

export default Login