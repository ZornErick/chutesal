import React from 'react';
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"


const Home = () => {

    return (   
      <section id='Pagina'>
        <Navbar/>
        <section id='Conteudo'>
            <Outlet/>
        </section>
      </section>
    )
}

export default Home