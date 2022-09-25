import React from 'react';
import "./styles.css";
import Delete from '../../../Imagens/delete.png';
import { toast } from 'react-toastify';
import chutelSalApi from '../../../Service/api';


const Quadra = ({id, nome, reFetch}) =>{
    async function excluirQuadra (){
        try{
            const response = await chutelSalApi.delete(`quadra/${id}`)
            if(response.status === 200){
                toast.success('Quadra excluida')
                reFetch()
            }
        }catch(e){
            toast.error('Erro ao excluir quadra');
        }
    }
    return(
        
        <div className="unit-quadra">
            <input required="required"  name="quadra"  placeholder="Nome" value={`${id} - ${nome}`}/>
            <button onClick={excluirQuadra} id="delete-button" type="submit"><img src={Delete}/></button>
            
        </div>
    )
}

export default Quadra