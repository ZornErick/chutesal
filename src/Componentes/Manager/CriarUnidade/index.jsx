import React, { useState } from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import Back from '../../../Imagens/back.png';
import { toast } from 'react-toastify';
import chutelSalApi from '../../../Service/api';


const Unidade = () =>{
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState({});

    const navigate = useNavigate();
    function voltarParaGerenciador (){
        navigate(`/unidade`);
    }
    async function criarUnidade (e){
        e.preventDefault();
        try{
            const response = await chutelSalApi.post(`/unidade`,
            {
                nome,
                numero,
                endereco:{
                    cep: endereco.cep,
                    numero: endereco.nro,
                    logradouro: endereco.rua,
                    bairro: endereco.bairro,
                    localidade: endereco.cidade,
                    uf: endereco.uf
                },
                quadrasId: [],
                campeonatosId: []
            })

            if(response.status === 201){
                toast.success(`Unidade criada com sucesso!`)
            }
        }catch(e){
            toast.error(`Não foi possível criar a unidade!`)
        }
    }

    function handleOnChange({target: {value, name}}){
        setEndereco((endereco) =>{
            const newEnd = {...endereco}
            newEnd[name] = value;
            return newEnd;
        })
    }

    return (
        
        <div id="u-container2">
            <nav>
                <button onClick={voltarParaGerenciador} id="back-button2"><img src={Back}/></button>
            </nav>            
            <form id="formulario2">
                <div id="form-title2">
                    <input required="required" name="nome" onChange={({ target: { value } }) => setNome(value)} value={nome} id="form-nome2"  placeholder="Nome"/>
                    <input required="required" name="numero" onChange={({ target: { value } }) => /^(\s*|\d+)$/.test(value) && setNumero(Number(value))} value={numero} id="form-nro2"  placeholder="Nº"/>
                </div>
                <h3>Endereço</h3>
                <hr className='line2'/>
                <div className="endereco-sub-container2">
                    <input required="required" name="cep" onChange={handleOnChange}  value={endereco.cep} placeholder="CEP" id="form-cep2"/>
                </div>
                
                <div className="endereco-sub-container2">
                    <input required="required" name="rua" onChange={handleOnChange} value={endereco.rua}  placeholder="Rua" id="form-rua2"/>
                    <input required="required" name="nro"  onChange={handleOnChange} value={endereco.nro} placeholder="Nº" id="form-numero2"/>
                </div>
               
                <div className="endereco-sub-container2">
                    <input required="required" name="bairro"  onChange={handleOnChange} value={endereco.bairro}  placeholder="Bairro" id="form-bairro2"/>
                    <input required="required" name="cidade"  onChange={handleOnChange} value={endereco.cidade} placeholder="Cidade" id="form-cidade2"/>
                    <input required="required" name="uf"   onChange={handleOnChange} value={endereco.uf} placeholder="Estado" id="form-uf2"/>
                </div>
                <hr className='line2'/>
                <button onClick={criarUnidade} type="submit">Criar</button>
            </form>
        </div>
    )

}

export default Unidade