import Navbar from '../Navbar/Navbar';
import './Ligas.css'
import React from "react";
import Cards from './cards';

function Ligas(){
  
  return<div>
    <Navbar/>
    <h2 className='t1'>
      SOCCER
    </h2>
    <h2 className='t2'>
      ONE
    </h2>

    <h2 className='ligas'>
      LIGAS
    </h2>

    <Cards/>


    
  </div>
}


export default Ligas;