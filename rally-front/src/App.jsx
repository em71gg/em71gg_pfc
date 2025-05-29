import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import Login from './pages/Login'
import UserPage from './pages/UserPage'
import RallyPage from './pages/RallyPage'
import PhotoPage from './pages/PhotoPage'
import ErrorPage from './pages/ErrorPage'
import RallyToBePage from './pages/RallyToBePage'
/*
const RallyPage = lazy(() => import('./pages/RallyPage'))
const PhotoPage = lazy(() => import('./pages/PhotoPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))*/
function App() {
  const [count, setCount] = useState(0)

  return (
   // <Suspense fallback={<h1>Cargando....</h1>}>
      <Routes>
        <Route path='/' element= { <HomePage />} />
        <Route path='/register' element= { <Register />} />
        <Route path='/login' element= { <Login />} />
        <Route path='/UserPage' element= { <UserPage />} />
        <Route path='/rally/:id' element= { <RallyPage />} />
        <Route path='/sign-rally/:id' element = {<RallyToBePage />} />
        <Route path='/photo/:id' element= {<PhotoPage />} />
        <Route path='*' element= { <ErrorPage /> } />
        <Route path='/user/:id' element= { <UserPage /> } />
      </Routes>
    //</Suspense>
    
  )
}

export default App
