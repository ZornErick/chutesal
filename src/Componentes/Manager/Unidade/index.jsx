import React, {useEffect} from 'react';
import "./styles.css"
import { useState } from "react";
import { useParams } from "react-router-dom"
import Quadra from "../Quadra";
import { useNavigate } from 'react-router-dom';
import Back from '../../../Imagens/back.png';
import chutelSalApi from "../../../Service/api";
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';


const Unidade = () =>{
    const { id } = useParams();

    const [inputEscondida, setInputEscondida] = useState(false);
    const [unidade, setUnidade] = useState({endereco:{}});
    const [endereco, setEndereco] = useState({});
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [quadras, setQuadras] = useState([]);

    //variavel que armazena o valor do state : inputEscondida
    // função para mudar o state : setInputEscondida(valor)

    const fetchUnidade = async () => {
        try{
            const {data} = await chutelSalApi.get(`/unidade/${id}`)

            setUnidade(data);

            setQuadras(data.quadras)

        }
        catch (e){
            console.log(e)
        }
    }


    useEffect(() =>{
        fetchUnidade()
    }, [])


    const navigate = useNavigate();

    function voltarParaGerenciador (){
        navigate(`/unidade`);
    }
    async function editarUnidade (e){
        e.preventDefault();
        try{
            const response = await chutelSalApi.put(`unidade/${id}`,{
                id: id,
                nome: nome || unidade?.nome,
                numero: numero || unidade?.numero,
                endereco:{
                    cep: endereco?.cep,
                    numero: endereco?.nro,
                    logradouro: endereco?.rua,
                    bairro: endereco?.bairro,
                    localidade: endereco?.cidade,
                    uf: endereco?.uf
                },
                quadrasId: []
            });

            if(response.status === 200){
                toast.success('Unidade atualizada com sucesso!')
            }

        }catch(e){
            toast.error('Erro ao editar unidade')
        }
    }
    function novaQuadra (){
        
    }

    const cepHandler = async () =>{

    }
    
    return (


        
        <div id="u-container">
            <nav>
                <button onClick={voltarParaGerenciador} id="back-button"><img src={Back}/></button>
            </nav>            
            <section>
                <form id="formulario">
                    <div id="form-title">
                        <input required="required" name="nome" id="form-nome"  placeholder="Nome" defaultValue={ unidade.nome} />
                        <input required="required" name="numero" id="form-nro"  placeholder="Número" defaultValue={ unidade.numero} />
                    </div>
                    <h3>Endereço</h3>
                    <hr className='line'/>
                    <div className="endereco-sub-container">
                        <InputMask id="form-cep" name="cep" mask="99999-999" value={unidade?.endereco?.cep} required="required" placeholder="CEP"></InputMask>
                    </div>
                    
                    <div className="endereco-sub-container">
                        <input required="required" name="rua"  placeholder="Rua" id="form-rua"                          defaultValue={unidade.endereco.logradouro}/>
                        <input required="required" name="nro"  placeholder="Nº" id="form-numero"                           defaultValue={unidade.endereco.numero}/>
                    </div>
                
                    <div className="endereco-sub-container">
                        <input required="required" name="bairro"  placeholder="Bairro" id="form-bairro"                 defaultValue={unidade.endereco.bairro}/>
                        <input required="required" name="cidade"  placeholder="Cidade" id="form-cidade"                 defaultValue={unidade.endereco.localidade}/>
                        <input required="required" name="uf"  placeholder="Estado" id="form-uf"                         defaultValue={unidade.endereco.uf}/>
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