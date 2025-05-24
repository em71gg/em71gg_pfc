import React, { useContext, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import { HeaderContext } from '../context/header.context';
import DragAndDrop from '../components/DragAndDrop';

function UserPage() {
    const {user} = useContext(UserContext);
    const {greetings, links} = useContext(HeaderContext);
    

    console.log(user);
    if(!user.isLoggedIn) return <Navigate to={'/error'} />;
    
    const login = (userInfo) => {
        console.log(userInfo);
       // setUser(userInfo)
    }
  return (
    <>
        <HeaderComponent greetings={greetings} links={links}/>

        {user.name && <h2>Hola {user.name}</h2>}

        <DragAndDrop />
    </>
    
  )
}

export default UserPage