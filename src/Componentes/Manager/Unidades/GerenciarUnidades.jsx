import React from 'react';
import './GerenciarUnidades.css';
import View from '../../../Imagens/eye.png'
import Delete from '../../../Imagens/delete.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import chutelSalApi from '../../../Service/api.js'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Oval, TailSpin} from 'react-loader-spinner'



function GerenciarUnidades() {
  const navigate = useNavigate();
  const [unidades, setUnidades] = useState([])
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  

  const fetchUnidades = async () => {
    try{

      const { data } = await chutelSalApi.get('/unidade');
      
      setUnidades(data)

    }
    catch(e){
      setError(true)
      throw e;
    } 
    finally{
      setLoading(false)
    }
  }

  const redirectToCreate = async () => {
    navigate('/criar-unidade')
  }

  useEffect(() => {
    toast.promise(
      fetchUnidades,
      {
      }
    )
    
  }, [])


  return (
    <>
    
      {
        loading ? 
        <TailSpin
          height="80"
          width="80"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        :
        (
        unidades.length > 0 ?
          (<div id='GU-Container'>

            {
              unidades.map((unidade) => {
                return <UnidadeContent
                    refetch={fetchUnidades}
                    key={unidade.id}
                    nome={unidade.nome}
                    numero={unidade.numero}
                    id={unidade.id}
                />
              }) 
            }
          </div>)
          :
            (<div id='sem-unidades'>
              {
                error ?
                <h2>Não foi possível buscar as unidades</h2> :
                <h2>Não há unidades cadastradas</h2>
              }
              { !error && <div id='nova-unidade' onClick={redirectToCreate}>Cadastre uma nova unidade</div>}
            </div>)
        )
      }
    </>
  );
}
 
function UnidadeContent({id, nome, numero, refetch}) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const navigate = useNavigate();

  function visualizarUnidade (){
    navigate(`${id}`);
  }

  async function removerUnidade (){
    try{
      setDeleting(true)
      const response = await chutelSalApi.delete(`/unidade/${id}`);
      
      if(  response.status === 200 ){
        setDeleted(true)
      }
    }catch(e){  

    }finally{
      
    }
    
  }

  useEffect(
    () =>{
      refetch()
  },[deleted]
  )

  return(
    <div className={`Unidade-Container ${deleted && "deleted"}`}>      
      <aside>
        <h3>{nome}</h3> 
        <p>Nº{`${numero}`}</p>
      </aside>
      <button  onClick={visualizarUnidade}  >
          <img src={View}/>
      </button>
      <button id={confirmDelete && "deleting"} disabled={deleting} onClick={() => {
        if(!confirmDelete){
          setConfirmDelete(true);
          return;
        }
        removerUnidade()
      }}  >

        {
          deleting ?
          <Oval
            color='#fff'
            height={30}
            width={30}
          /> :
          <img src={Delete}/>
        }
        
        </button>
    </div>
  )
}

export default GerenciarUnidades;