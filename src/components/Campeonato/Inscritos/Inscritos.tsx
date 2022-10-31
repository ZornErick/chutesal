import Table, {IColumnOption} from "../../Table/Table";
import {Options} from "../../Options/Options";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../services/apit";
import { toast } from "react-toastify";
import { Text } from '../../Text/Text'
interface IInscrito {
    id: number;
    nome: string;
    whatsapp: string;
    dataNascimento: string;
    idade: number;
    time: any;
}



export function Inscritos() {
    const { id } = useParams();
    const [toDelete, setToDelete] = useState<number | null>(null);
    const [inscritos, setInscritos] = useState<IInscrito[]>([]);


    const fetchData = async () => {
        try{
            const {data} = await apiInstance.get<IInscrito[]>(`/inscrito`)
            console.log({data});

            const formmated = data?.map(({dataNascimento, id, nome, whatsapp, time}) => {
                
                
                return {
                    id,
                    nome,
                    whatsapp,
                    dataNascimento,
                    idade: getIdade(dataNascimento),
                    time
                }
            }); 
            setInscritos(formmated);
        }catch(e){
            toast.error('Não foi possível carregar os inscritos')
        }

    }

    function getIdade(dataNascimento: string) {
        var today = new Date();
        var birthDate = new Date(dataNascimento);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        } 

        return age;
    }

    const headerOptions : IColumnOption[] = [
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
            className: "justify-start"
        },
        {
            displayName: "Idade",
            valueKey: "idade",
            id: "idade",
        },
        {
            displayName: "WhatsApp",
            valueKey: "whatsapp",
            id: "whatsapp",
        },
        {
            displayName: "Time",
            valueKey: "time",
            transformCell: ({value}) => (<Text className="text-white" >{value ? value : "-"}</Text>),
            id: "time",
        },
        {
            displayName: "Excluir",
            type: "action",
            valueKey: "id",
            transformCell: ({value: id}) => (<Options stroke={"#006666"}
                deleteCallback={() => setToDelete(id)}
            />),
            id: "excluir",
        },
    ];

    useEffect(() => {
        fetchData()
    },[]);

    return (
        <main className={"flex flex-col items-center h-full my-12 mx-8"}>
            <Table
                columns={headerOptions}
                data={inscritos}
            />
        </main>
    );
}
