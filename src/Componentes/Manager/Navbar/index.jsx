import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../../../Imagens/logo.png'

import "./style.css"

const Navbar =  () => {
    return(
        <header id='Titulo'>
          <h1><img src={Logo}/>ChuteSal</h1>
          <nav>        
            <NavLink  to="campeonato" >Gerenciar Campeonatos</NavLink>
            <NavLink  to="criar-campeonato" >Criar Campeonato</NavLink>
            <NavLink  to="unidade"  >Gerenciar Unidades</NavLink>
            <NavLink  to="criar-unidade" >Criar Unidade</NavLink>
            {/* <NavLink className={({isActive}) => isActive ? "active" : undefined} to="unidade">Logout</NavLink> */}
          </nav>
        </header>
    )
}

export default Navbar