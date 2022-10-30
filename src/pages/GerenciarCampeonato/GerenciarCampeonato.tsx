import { useEffect, useState } from "react";
import { CampeonatoNavIcon } from "../../assets/Icons/CampeonatoNavIcon/CampeonatoNavIcon";
import { InscritoNavIcon } from "../../assets/Icons/InscritoNavIcon/InscritoNavIcon";
import { JogoNavIcon } from "../../assets/Icons/JogoNavIcon/JogoNavIcon";
import { TimeNavIcon } from "../../assets/Icons/TimeNavIcon/TimeNavIcon";
import { VencedorNavIcon } from "../../assets/Icons/VencedorNavIcon/VencedorNavIcon";
import { CampeonatoMenu } from "../../components/Campeonato/CampeonatoMenu/CampeonatoMenu";
import { CampeonatoUpdateForm } from "../../components/Campeonato/CampeonatoUpdateForm/CampeonatoUpdateForm";
import './style.css'
import {Inscritos} from "../../components/Campeonato/Inscritos/Inscritos";
import { useParams } from "react-router-dom";
import { ICampeonato } from "../Campeonatos/Campeonatos";
import apiInstance from "../../services/apit";
import { toast } from "react-toastify";


export interface IMenuElement {
    element: JSX.Element;
    icon: JSX.Element;
    label: string;
}

export function GerenciarCampeonato() {
    const { id: idCampeonato } = useParams();

    const [component, setComponent] = useState<number>(1);
    const [campeonato, setCampeonato] = useState<ICampeonato>();
    
    const fetchData = async () => {
        try{
            const { data } = await apiInstance.get<ICampeonato>(`/campeonato/${idCampeonato}`);
            console.log({data});
            
            setCampeonato(data);
            
        }catch(e){
            console.log({e});
            toast.error(`Não foi possível carregar as informações`)
        }
    }

    const componentsOptions : {[key : number] : IMenuElement} = {
        1:{
            label: "Campeonato",
            icon: <CampeonatoNavIcon />,
            element: <CampeonatoUpdateForm fetchCampeonato={fetchData} campeonato={campeonato}/> 
        },
        2:{
            label: "Jogos",
            icon: <JogoNavIcon />,
            element: <></>
        },
        3:{
            label: "Inscritos",
            icon: <InscritoNavIcon />,
            element: <Inscritos />
        },
        4:{
            label: "Times",
            icon: <TimeNavIcon />,
            element: <></>
        },
        5:{
            label: "Vencedores",
            icon: <VencedorNavIcon />,
            element: <></>
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex justify-between p-6 h-full items-center">
            <CampeonatoMenu
                menuOptions={componentsOptions}
                selectedComponent={component}
                setSelected={setComponent}
            />
            { componentsOptions[component]?.element }
        </div>
    );
}
