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

interface IData {
    nome: string;
    status: string;
    unidade: string;
    inscricoes: string;
    duracao: string;
}

export function Campeonatos() {
    const [campeonatos, setCampeonatos] = useState<IData[]>([]);

    const deleteCampeonato = async (id : any) => {
        try{

        }catch(e){
            
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
            transformCell: (id) => <Options 
                editCallback={() => {}} 
                deleteCallback={() => deleteCampeonato(id)}}
            />,
            id: "opcoes",

        },     
    ];

    const filterOptions = ["Nome", "Inscrições", "Duração"];

    const fetchData = async () => {
        try{
            const { data } = await apiInstance.get(`/campeonato`);

            setCampeonatos(data);
        }catch(e){
            toast.error(`Não foi possível buscar os campeonatos`)
        }
    }
   
    useEffect(() => {
        fetchData();
    },[])
    return (
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
    );
}
