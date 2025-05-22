import { useContext, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import '../components/RegisterForm';
import RegisterForm from '../components/RegisterForm';
import { HeaderContext } from '../context/header.context';

function Register() {
  const {greetings, links} = useContext(HeaderContext);
  
  return (
    <>
    <HeaderComponent greetings={greetings} links={links}/>
    <RegisterForm />
    </>
  )
}

export default Register