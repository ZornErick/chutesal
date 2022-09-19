import React from 'react';
import "./style2.css"
import { useNavigate } from 'react-router-dom';
import Back from '../../../Imagens/back.png';


const Unidade = () =>{
    const navigate = useNavigate();
    function voltarParaGerenciador (){
        navigate(`/unidade`);
    }
    function editarUnidade (){
        
    }
    function novaQuadra (){
        
    }

    return (


        
        <div id="u-container2">
            <nav>
                <button onClick={voltarParaGerenciador} id="back-button2"><img src={Back}/></button>
            </nav>            
            <form id="formulario2">
                <div id="form-title2">
                    <input required="required" name="Nome" id="form-nome2"  placeholder="Nome"/>
                    <input required="required" name="numero" id="form-nro2"  placeholder="Nº"/>
                </div>
                <h3>Endereço</h3>
                <hr className='line2'/>
                <div className="endereco-sub-container2">
                    <input required="required" name="cep"  placeholder="CEP" id="form-cep2"/>
                </div>
                
                <div className="endereco-sub-container2">
                    <input required="required" name="rua"  placeholder="Rua" id="form-rua2"/>
                    <input required="required" name="nro"  placeholder="Nº" id="form-numero2"/>
                </div>
               
                <div className="endereco-sub-container2">
                    <input required="required" name="bairro"  placeholder="Bairro" id="form-bairro2"/>
                    <input required="required" name="cidade"  placeholder="Cidade" id="form-cidade2"/>
                    <input required="required" name="uf"  placeholder="Estado" id="form-uf2"/>
                </div>
                <hr className='line2'/>
                <button onClick={editarUnidade} type="submit">Criar</button>
            </form>
        </div>
    )

}

export default Unidade