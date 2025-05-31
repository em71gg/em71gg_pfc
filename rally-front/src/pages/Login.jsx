
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent'
import LoginForm from '../components/LoginForm'
import { useContext } from "react";
import { HeaderContext } from '../context/header.context';
import { UserContext } from '../context/user.context';

function Login() {
    const {greetings, links} = useContext(HeaderContext);
    const {user, setUser} = useContext(UserContext);
   
    
  return (
    <>
    <HeaderComponent greetings={greetings} links={links}/>
    <LoginForm /> {/*aquí debe definirse user a traves de setUser*/}

    <Link to={`/user/${user.id}`}>Ir a página de usuario</Link>
    </>
  )
}

export default Login