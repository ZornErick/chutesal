import React from 'react';
import './GerenciarUnidades.css';
import View from '../../../Imagens/eye.png'
import Delete from '../../../Imagens/delete.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import chutelSalApi from '../../../Service/api.js'
import { useState } from 'react';
import { toast } from 'react-toastify';
function GerenciarUnidades() {
  const [unidades, setUnidades] = useState([])
  
  const fetchUnidades = async () => {
    try{
      setUnidades(() => [{id:1,nome:"a"}])

      const { data } = await chutelSalApi.get('/unidade');
      setUnidades(data)

    }catch(e){
      throw e;
    }
  }

  useEffect(() => {
    toast.promise(
      fetchUnidades,
      {
        pending: 'Buscando unidades...',
        success: 'Unidades encontradas',
        error: 'Erro ao buscar unidades'
      }
    )
    
  }, [])


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
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const navigate = useNavigate();

  function visualizarUnidade (){
    navigate(`${id}`);
  }

  async function removerUnidade (){
    try{
      setConfirmDelete(false);
      const { data } = await chutelSalApi.delete(`/unidade/${id}`);

    }catch(e){

    }finally{
      setConfirmDelete(false)
    }
    
  }

  return(
    <div className={`Unidade-Container`}>      
      <aside>
        <h3>{nome}</h3> 
        <p>Nº{`${numero}`}</p>
      </aside>
      <button onClick={visualizarUnidade}  ><img src={View}/></button>
      <button id={confirmDelete && "deleting"}  onClick={() => {
        if(!confirmDelete){
          setConfirmDelete(true);
          return;
        }
        removerUnidade()
      }}  ><img  src={Delete}/></button>
    </div>
  )
}

export default GerenciarUnidades;