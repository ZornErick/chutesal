import React from 'react';
import "./styles.css";
import Delete from '../../../Imagens/delete.png';


const Quadra = ({id, nome}) =>{
    function excluirQuadra (){
        
    }
    return(
        
        <div className="unit-quadra">
            <input required="required"  name="quadra"  placeholder="Nome" defaultValue={nome}/>
            <button onClick={excluirQuadra} id="delete-button" type="submit"><img src={Delete}/></button>
            
        </div>
    )
}

export default Quadra