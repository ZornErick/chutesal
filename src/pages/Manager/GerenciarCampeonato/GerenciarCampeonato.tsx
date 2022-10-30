import { useState } from "react";
import { CampeonatoNavIcon } from "../../../assets/Icons/CampeonatoNavIcon/CampeonatoNavIcon";
import { InscritoNavIcon } from "../../../assets/Icons/InscritoNavIcon/InscritoNavIcon";
import { JogoNavIcon } from "../../../assets/Icons/JogoNavIcon/JogoNavIcon";
import { TimeNavIcon } from "../../../assets/Icons/TimeNavIcon/TimeNavIcon";
import { VencedorNavIcon } from "../../../assets/Icons/VencedorNavIcon/VencedorNavIcon";
import { CampeonatoMenu } from "../../../components/Campeonato/CampeonatoMenu/CampeonatoMenu";
import { CampeonatoUpdateForm } from "../../../components/Campeonato/CampeonatoUpdateForm/CampeonatoUpdateForm";
import './style.css'
import {Inscritos} from "../../../components/Campeonato/Inscritos/Inscritos";


export interface IMenuElement {
    element: JSX.Element;
    icon: JSX.Element;
    label: string;
}

const componentsOptions : {[key : number] : IMenuElement} = {
    1:{
        label: "Campeonato",
        icon: <CampeonatoNavIcon />,
        element: <CampeonatoUpdateForm/> 
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

export function GerenciarCampeonato() {
    const [component, setComponent] = useState<number>(Number(Object.keys(componentsOptions)[0]));

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
