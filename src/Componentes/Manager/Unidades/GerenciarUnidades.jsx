import React from 'react';
import './GerenciarUnidades.css';
import View from '../../../Imagens/eye.png'
import { useNavigate } from 'react-router-dom';

function GerenciarUnidades() {

  
  const unidades = [
    {
      id: 1,
      nome: "Unidade inicial",
      numero: 1
    },
    {
      id: 2,
      nome: "Unidade secundária",
      numero: 5
    },
    {
      id: 3,
      nome: "Unidade terciaria",
      numero: 9
    }
  ];



  return (
    <section id='GU-Container'>
      {unidades.map((unidade) => {

        return <UnidadeContent
            key={unidade.id}
            nome={unidade.nome}
            numero={unidade.numero}
            id={unidade.id}
        />

      })}
    </section>
  );
}
 
function UnidadeContent({id, nome, numero}) {

  const navigate = useNavigate();

  function visualizarUnidade (){
    navigate(`${id}`);
  }

  return(
    <div className='Unidade-Container'>
      <button onClick={visualizarUnidade}  ><img src={View}/></button>
      <aside>
        <h3>{nome}</h3> 
        <p>Nº{`${numero}`}</p>
      </aside> 
    </div>
  )
}

export default GerenciarUnidades;