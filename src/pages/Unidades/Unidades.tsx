import { Header } from "../../components/Table/TableHeader/TableHeader";
import { Button } from "../../components/Button/Button";
import { Plus } from "../../assets/Icons/Plus/Plus";
import { Filter } from "../../components/Filter/Filter";
import { Options } from "../../components/Options/Options";
import { TableBody } from "../../components/Table/TableBody/TableBody";
import Table, { IColumnOption } from "../../components/Table/Table";
import { useEffect, useState } from "react";
import apiInstance from "../../services/apit";
import { toast } from "react-toastify";

interface IEndereco {

    cep: string;
    numero: number;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface IData {
    id: number;
    numero: number;
    nome: string;
    endereco: IEndereco;
    
}


export function Unidades() {
    const [unidades, setUnidades] = useState<IData[]>([]);
    const [toDelete, setToDelete] = useState<number | null>(1);


    const deleteUnidade = async (id : any) => {
        try{
            
        }catch(e){
            
        }
        
    }

    const fetchData = async () => {
        try{
            const { data } = await apiInstance.get(`/unidade`);

            setUnidades(data);
        }catch(e){
            toast.error(`Não foi possível buscar as unidades`)
        }
    }

    const headerOptions : IColumnOption[] = [          
        {
            displayName: "Número",
            valueKey: "numero",
            id: "numero",

        },
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
        },
        {
            displayName: "Endereço",
            valueKey: "endereco",
            id: "endereco",
        },
        {
            displayName: "Opções",
            id: "opcoes",
            transformCell: () => <Options  editCallback={() => {}} deleteCallback={() => {}}/>
        },     
    ];

    const filterOptions = ["Número", "Nome"];


    useEffect(() => {
        fetchData()
    },[]);
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
                data={unidades}
            />
        </main>
    );
}
