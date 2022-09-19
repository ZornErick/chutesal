import React from 'react';
import "./styles.css"
import { useState } from "react";
import { useParams } from "react-router-dom"
import Quadra from "../Quadra";
import { useNavigate } from 'react-router-dom';
import Back from '../../../Imagens/back.png';


const Unidade = () =>{
    const { id } = useParams();

    const [inputEscondida, setInputEscondida] = useState(false);
    //variavel que armazena o valor do state : inputEscondida
    // função para mudar o state : setInputEscondida(valor)

    const quadras = [
        {
            id: 1,
            nome: "Quadra 1"
        },
        {
            id: 2,
            nome: "Quadra 2"
        },

    ];
    const navigate = useNavigate();
    function voltarParaGerenciador (){
        navigate(`/unidade`);
    }
    function editarUnidade (){
        
    }
    function novaQuadra (){
        
    }

    return (


        
        <div id="u-container">
            <nav>
                <button onClick={voltarParaGerenciador} id="back-button"><img src={Back}/></button>
            </nav>            
            <section>
                <form id="formulario">
                    <div id="form-title">
                        <input required="required" name="Nome" id="form-nome"  placeholder="Nome"               defaultValue="Francisco Morato" />
                        <input required="required" name="numero" id="form-nro"  placeholder="Número"            defaultValue="72" />
                    </div>
                    <h3>Endereço</h3>
                    <hr className='line'/>
                    <div className="endereco-sub-container">
                        <input required="required" name="cep"  placeholder="CEP" id="form-cep" label=""                     defaultValue="07845-000"/>
                    </div>
                    
                    <div className="endereco-sub-container">
                        <input required="required" name="rua"  placeholder="Rua" id="form-rua"                          defaultValue="Avenida Lins"/>
                        <input required="required" name="nro"  placeholder="Nº" id="form-numero"                           defaultValue="359"/>
                    </div>
                
                    <div className="endereco-sub-container">
                        <input required="required" name="bairro"  placeholder="Bairro" id="form-bairro"                 defaultValue="Vila Suíça"/>
                        <input required="required" name="cidade"  placeholder="Cidade" id="form-cidade"                 defaultValue="Francisco Morato"/>
                        <input required="required" name="uf"  placeholder="Estado" id="form-uf"                         defaultValue="SP"/>
                    </div>
                    <hr className='line'/>
                    <button onClick={editarUnidade} type="submit">Salvar</button>
                </form>
                <div id="quadras">
                    <h1>Quadras</h1>
                    <div id="container-quadras">
                        {
                            quadras.map(({id, nome}) => <Quadra id={id} nome={nome} />)
                        }
                    </div>
                    <form id="nova-quadra-form">
                        <div>
                            <p id="label-quadra">Adicionar Quadra</p>
                            <hr className='line'/>
                            <input required="required" name="quadra"  placeholder="Nome" id="nome-quadra"/>
                        </div>
                        <button onClick={novaQuadra} id="add-button" type="submit">+</button>
                    </form>               
                    
                </div>
            </section>
        </div>
    )

}

export default Unidade