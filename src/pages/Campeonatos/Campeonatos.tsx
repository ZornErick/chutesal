import { Header } from "../../components/Table/TableHeader/TableHeader";
import { Filter } from "../../components/Filter/Filter";
import { Button } from "../../components/Button/Button";
import { Plus } from "../../assets/Icons/Plus/Plus";
import { TableBody } from "../../components/Table/TableBody/TableBody";
import { Options } from "../../components/Options/Options";
import Table, { IColumnOption } from "../../components/Table/Table";
import { useEffect, useState } from "react";
import apiInstance from "../../services/apit";
import { toast } from "react-toastify";
import DeleteModalContent from "../../components/ModalContent/ModalContent";
import Modal from "../../components/Modal/Modal";
import { Thrash } from '../../assets/Icons/Thrash/Thrash' 

type  StatusCampeonato = "PLANEJADO"  | "ANDAMENTO" | "CANCELADO" | "EXECUTADO"

interface IUnidade {
    id: number;
    nome: string;
}

interface ICampeonato {
    id: number;
    nome: string;
    dataInicialJogos : string;
    dataFinalJogos: string;
    dataInicialInscricao: string;
    dataFinalInscricao: string;
    status: StatusCampeonato;
    unidade: IUnidade
}

interface IData {
    id: number;
    nome: string;
    status: StatusCampeonato;
    unidade: string;
    inscricoes: string;
    duracao: string;
}

export function Campeonatos() {
    const [campeonatos, setCampeonatos] = useState<IData[]>([]);
    const [toDelete, setToDelete] = useState<number | null>(null);

    const deleteCampeonato = async (id : any) => {
        try{
            const { status, data } = await apiInstance.delete(`/campeonato/${id}`)

            if(status === 200){
                toast.success(`Campeonato apagado com sucesso`)
                fetchData()
            }
        }catch(e){
            console.log(e);            
            toast.error(`Não foi possível apagar o campeonato`)
        }
        finally{
            setToDelete(null);
        }
        
    }

    const fetchData = async () => {
        try{
            const { data } = await apiInstance.get<ICampeonato[]>(`/campeonato`);
            console.log({data});
            
            const formattedData : IData[] = data?.map(({
                id,
                nome,
                dataInicialInscricao,
                dataFinalInscricao,
                dataInicialJogos,
                dataFinalJogos,
                status,
                unidade: { nome : unidade }
            }) =>{
                return ({
                    id,
                    nome,
                    status,
                    unidade,
                    inscricoes: `${dataInicialInscricao?.replace("-","/")} - ${dataFinalInscricao?.replace("-","/")}`,
                    duracao: `${dataInicialJogos?.replace("-","/")} - ${dataFinalJogos?.replace("-","/")}`,
                }) as IData;
            }); 

            setCampeonatos(formattedData);
        }catch(e){
            console.log({e});
            
            toast.error(`Não foi possível buscar os campeonatos`)
        }
    }

    const headerOptions : IColumnOption[] = [          
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
            className: "justify-start"
        },
        {
            displayName: "Status",
            valueKey: "status",
            id: "status",
        },
        {
            displayName: "Unidade",
            valueKey: "unidade",
            id: "nomeUnidade",
        },
        {
            displayName: "Inscrições",
            valueKey: "inscricoes",
            id: "inscricoes",
        },
        {
            displayName: "Duração",
            valueKey: "duracao",
            id: "duracao",
        },
        {
            displayName: "Opções",
            type: "action",
            valueKey: "id",
            transformCell: (id) => (<Options 
                editCallback={() => {}} 
                deleteCallback={() => setToDelete(id)}
            />),
            id: "opcoes",

        },     
    ];

    const filterOptions = ["Nome", "Inscrições", "Duração"];

    useEffect(() => {
        fetchData();
    },[])


    return (
        <>
            <Modal
                open={toDelete !== null}
                Icon={Thrash}
                modalText="Deseja apagar o campeonato?"
                confirmAction={() => deleteCampeonato(toDelete)}
                cancelAction={() => setToDelete(null)}
            />

            <main className={"flex flex-col items-center h-full my-12 mx-8"}>
                <div className={"flex w-full justify-between"}>
                    <Button className={"flex justify-around w-24 hover:scale-105 drop-shadow-md h-10 rounded-lg items-center bg-gray-700 text-gray-200 font-sans"}>
                        <Plus />
                        Incluir
                    </Button>
                    <Filter filters={filterOptions} />
                </div>
                <Table
                    columns={headerOptions}
                    data={campeonatos}
                />
            </main>
        </>
        
    );
}
