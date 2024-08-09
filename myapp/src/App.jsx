import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import S2 from './components/S2'
import {Route,Routes } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Hi from './components/Hi'
import Api from './components/Api'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Statebasic/> */}
    {/* <Statebasic/> */}
    {/* <Hi/> */}
    {/* <Api/> */}
    <Navbar/>
    <Routes>
      <Route path="/S2"element={<S2/>} />
      <Route path="/L"element={<Login/>} />
      <Route path="/sb"element={<Statebasic/>} />
      <Route path='/Hi'element={<Hi/>}/>
      <Route path="/api"element={<Api/>}/>
    </Routes>
    {/* <S2/> */}
    </>
  )
}

export default App
