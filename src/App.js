  import React from 'react';
  import './App.css';
  import './background.css';
  import GerenciarUnidades from './Componentes/Manager/Unidades/GerenciarUnidades';
  import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import Home from './Componentes/Manager/Home';
  import Unidade from './Componentes/Manager/Unidade';
  import CriarUnidade from './Componentes/Manager/CriarUnidade';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  function App() {
    return (
      <Router>
        <ToastContainer 
        position='top-center'
        theme='dark'
        />
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='unidade' element={<GerenciarUnidades/>} />
            <Route path='unidade/:id' element={<Unidade/>} />

            <Route path='campeonato' element={<h1>Campeonato</h1>} />
            <Route path='criar-campeonato' element={<h1>Criar Campeonato</h1>} />
            <Route path='criar-unidade' element={<CriarUnidade/>} />
          </Route>
        </Routes>
      </Router> 
    );
  }

  export default App;
