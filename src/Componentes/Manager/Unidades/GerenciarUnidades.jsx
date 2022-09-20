import React from 'react';
import './GerenciarUnidades.css';
import View from '../../../Imagens/eye.png'
import Delete from '../../../Imagens/delete.png';
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
    },
    {
      id: 4,
      nome: "Unidade quartenária",
      numero: 9
    },
    {
      id: 5,
      nome: "Unidade dos esquecidos",
      numero: 9
    }
  ];



  return (
    <div id='GU-Container'>
      {unidades.map((unidade) => {

        return <UnidadeContent
            key={unidade.id}
            nome={unidade.nome}
            numero={unidade.numero}
            id={unidade.id}
        />

      })}
    </div>
  );
}
 
function UnidadeContent({id, nome, numero}) {

  const navigate = useNavigate();

  function visualizarUnidade (){
    navigate(`${id}`);
  }
  function removerUnidade (){

  }

  return(
    <div className='Unidade-Container'>      
      <aside>
        <h3>{nome}</h3> 
        <p>Nº{`${numero}`}</p>
      </aside>
      <button onClick={visualizarUnidade}  ><img src={View}/></button>
      <button onClick={removerUnidade}  ><img src={Delete}/></button>
    </div>
  )
}

export default GerenciarUnidades;