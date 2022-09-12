import React from 'react'
import styled from 'styled-components'
import logo from './soccerone.svg';



function Navbar() {
  return (
    <>
      <Navb2>
        <img src={logo} className = "App-logo" alt= "logo" />
        <div>
          <a href='/'>Ligas</a>
          <a href='/'>Torneos</a>
          <a href='/'>Selecciones</a>
          <a href='/'>Iniciar sesion</a>
        </div>
      </Navb2>

    </>
  )
}

export default Navbar

const Navb2 = styled.nav`
  padding: .4r;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    position: relative;
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    color: #a0a0a0;
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 0 30px;
  }
  a:after{
    content: "";
    position: absolute;
    background-color: #ff3c78;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }
  a:hover{
    color: #ffffff;
  }
  a:hover:after{
    width: 100%;
  }

  img{
    height: 90px;
    margin-right: 45px;
  }
`