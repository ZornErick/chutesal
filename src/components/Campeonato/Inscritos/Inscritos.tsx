import Table, {IColumnOption} from "../../Table/Table";
import {Options} from "../../Options/Options";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../services/apit";
import { toast } from "react-toastify";
import { Text } from '../../Text/Text';
import Modal from "../../Modal/Modal";
import { Thrash } from '../../../assets/Icons/Thrash/Thrash'
import { ICampeonato } from "../../../pages/GerenciarCampeonato/GerenciarCampeonato";


export interface IInscrito {
    id: number;
    nome: string;
    whatsapp: string;
    dataNascimento: string;
    idade: number;
    time: any;
}

interface InscritosProps{
    inscritos: IInscrito[];
    reFetch: () => Promise<void>
}

export function Inscritos({inscritos, reFetch} : InscritosProps) {
    const { id } = useParams();
    const [toDelete, setToDelete] = useState<number | null>(null);

    console.log({inscritos});
    
    const deleteInscrito = async (id : any) => {
        try{
            const { status, data } = await apiInstance.delete(`/inscrito/${id}`)
 
            if(status === 200) {
                toast.success(`Inscrito apagado com sucesso`)
                reFetch()
            }
        } catch(e) {
            console.log(e);            
            toast.error(`Não foi possível apagar o inscrito`)
        } finally {
            setToDelete(null);
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
    },[]);

    return (
        <>
        <Modal
            open={toDelete !== null}
            Icon={Thrash}
            modalText="Deseja apagar o inscrito?"
            confirmAction={() => deleteInscrito(toDelete)}
            cancelAction={() => setToDelete(null)}
        />

        <main className={"flex flex-col items-center h-full mb-12 mx-8"}>
            <Table
                columns={headerOptions}
                data={inscritos}
                hideTableHeaderLine
            />
        </main>
        </>
        
        
    );
}
