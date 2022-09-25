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
import { useRef } from 'react';


const Unidade = () =>{
    const { id } = useParams();

    const [inputEscondida, setInputEscondida] = useState(false);
    const [unidade, setUnidade] = useState({endereco:{}});
    const [endereco, setEndereco] = useState({});
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [quadras, setQuadras] = useState([]);
    const [nomeQuadra, setNomeQuadra] = useState('');
    const formRef = useRef({});
    //variavel que armazena o valor do state : inputEscondida
    // função para mudar o state : setInputEscondida(valor)

    const fetchUnidade = async () => {
        try{
            const {data} = await chutelSalApi.get(`/unidade/${id}`)

            setUnidade(data);

            setQuadras(data.quadras)

            formRef.current = data;

        }
        catch (e){
            console.log(e)
        }
    }


    useEffect(() =>{
        fetchUnidade()
    }, [])

    console.log({unidade})
    const navigate = useNavigate();

    function voltarParaGerenciador (){
        navigate(`/unidade`);
    }
    async function editarUnidade (e){
        e.preventDefault();
        try{
            const response = await chutelSalApi.put(`unidade/${id}`,{
                id: +id,
                nome: nome || unidade?.nome,
                numero: numero || unidade?.numero,
                endereco:{
                    cep: endereco?.cep || unidade?.endereco?.cep,
                    numero: endereco?.nro || unidade?.endereco?.numero,
                    logradouro: endereco?.rua || unidade?.endereco?.logradouro,
                    bairro: endereco?.bairro || unidade?.endereco?.bairro,
                    localidade: endereco?.cidade || unidade?.endereco?.localidade,
                    uf: endereco?.uf || unidade?.endereco?.uf
                },
                quadrasId: quadras.map((q) => q.id),
                campeonatosId: []
            });

            if(response.status === 200){
                toast.success('Unidade atualizada com sucesso!')
            }

        }catch(e){
            toast.error('Erro ao editar unidade')
        }
    }
    async function novaQuadra (e){
        e.preventDefault();
        try{
             const { data } = await chutelSalApi.post('quadra',{
                nome: nomeQuadra,
                unidadeId: id,
                jogosId: [] 
             })
             console.log({data});
            
             if(data){
                fetchUnidade(id)
             }
        }catch(e){
            toast.error(`Erro ao criar quadra '${nomeQuadra}'`)
        }finally{
            setNomeQuadra('')
        }
    }
    console.log({quadras});
    const cepHandler = async () =>{

    }

    function mudarEndereco(valor, name){
        console.log({valor, name});
        setEndereco((end) => {
            const newEndereco = {...end}
            let valid = true;
            newEndereco[name] =  valor
            if(name === 'cep' && !/^(\s*|\d+)$/.test(valor)){
                valid = false
            }
            if(valid) newEndereco[name] = valor 

            return newEndereco;
        } )
    }
    console.log(unidade.nome)
    console.log(nome)
    console.log({endereco});
    return (


        
        <div id="u-container">
            <nav>
                <button onClick={voltarParaGerenciador} id="back-button"><img src={Back}/></button>
            </nav>            
            <section>
                <form ref={formRef} id="formulario">
                    <div id="form-title">
                        <input required="required" name="nome" id="form-nome"   placeholder="Nome" value={nome || unidade?.nome} onChange={({target: {value}}) => setNome(value)} />
                        <input required="required" name="numero" id="form-nro"  placeholder="Número" value={numero || unidade?.numero} onChange={({target: {value}}) => setNumero(value)}  />
                    </div>
                    <h3>Endereço</h3>
                    <hr className='line'/>
                    <div className="endereco-sub-container">
                        <input id="form-cep" name="cep" mask="99999-999" defaultValue={unidade?.endereco?.cep} value={endereco?.cep || unidade?.endereco?.cep} onChange={({target: {value, name}}) => mudarEndereco(value, name )}  required="required" placeholder="CEP"></input>
                    </div>
                    
                    <div className="endereco-sub-container">
                        <input required="required" name="rua"  placeholder="Rua" id="form-rua"   value={endereco?.rua || unidade?.endereco?.logradouro} onChange={({target: {value, name}}) => mudarEndereco(value, name )}                        defaultValue={unidade.endereco.logradouro}/>
                        <input required="required" name="nro"  placeholder="Nº" id="form-numero" value={endereco?.nro || unidade?.endereco?.numero} onChange={({target: {value, name}}) => mudarEndereco(value, name )}                          defaultValue={unidade.endereco.numero}/>
                    </div>
                
                    <div className="endereco-sub-container">
                        <input required="required" name="bairro"  placeholder="Bairro" id="form-bairro" value={endereco?.bairro || unidade?.endereco?.bairro} onChange={({target: {value, name}}) => mudarEndereco(value, name )}                defaultValue={unidade.endereco.bairro}/>
                        <input required="required" name="cidade"  placeholder="Cidade" id="form-cidade" value={endereco?.cidade || unidade?.endereco?.localidade} onChange={({target: {value, name}}) => mudarEndereco(value, name )}                defaultValue={unidade.endereco.localidade}/>
                        <input required="required" name="uf"  placeholder="Estado" id="form-uf"  value={endereco?.uf || unidade?.endereco?.uf} onChange={({target: {value, name}}) => mudarEndereco(value, name )}                       defaultValue={unidade.endereco.uf}/>
                    </div>
                    <hr className='line'/>
                    <button onClick={editarUnidade} type="submit">Salvar</button>
                </form>
                <div id="quadras">
                    <h1>Quadras</h1>
                    <div id="container-quadras">
                        {
                            quadras.map(({id, nome}) => <Quadra reFetch={fetchUnidade} id={id} nome={nome} />)
                        }
                    </div>
                    <form id="nova-quadra-form">
                        <div>
                            <p id="label-quadra">Adicionar Quadra</p>
                            <hr className='line'/>
                            <input value={nomeQuadra} onChange={({target: {value}}) => setNomeQuadra(value)} required="required" name="quadra"  placeholder="Nome" id="nome-quadra"/>
                        </div>
                        <button onClick={novaQuadra} id="add-button" type="submit">+</button>
                    </form>               
                    
                </div>
            </section>
        </div>
    )

}

export default Unidade