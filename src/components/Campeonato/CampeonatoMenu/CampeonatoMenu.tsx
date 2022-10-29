import {Button} from "../../Button/Button";
import {Text} from "../../Text/Text";
import {CampeonatoNavIcon} from "../../../assets/Icons/CampeonatoNavIcon/CampeonatoNavIcon";
import {JogoNavIcon} from "../../../assets/Icons/JogoNavIcon/JogoNavIcon";
import {InscritoNavIcon} from "../../../assets/Icons/InscritoNavIcon/InscritoNavIcon";
import {TimeNavIcon} from "../../../assets/Icons/TimeNavIcon/TimeNavIcon";
import {VencedorNavIcon} from "../../../assets/Icons/VencedorNavIcon/VencedorNavIcon";
import {Thrash} from "../../../assets/Icons/Thrash/Thrash";
import {Save} from "../../../assets/Icons/Save/Save";
import { IMenuElement } from "../../../pages/GerenciarCampeonato/GerenciarCampeonato";



interface IMenuProps {
    menuOptions:  {[key : number] : IMenuElement};
    selectedComponent: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>
}

export function CampeonatoMenu({ menuOptions, selectedComponent, setSelected }: IMenuProps) {
    

    return (
        <nav className={"flex flex-col items-center h-full"}>
            <div>
                <ul>
                    {Object.keys(menuOptions).map((key, index) => {
                        const {icon, label} = menuOptions[Number(key)];
                        const selected = label === menuOptions[selectedComponent].label;
                        return (
                        <li key={index} className={"p-6"}>
                            <div onClick={() => setSelected(Number(key))} className={`flex cursor-pointer select-none  items-center gap-2 hover:scale-105 ${ selected ? 'optionSelected' : ''}`}>
                                {icon}
                                <Text className={` ${ selected ? 'optionSelected' : 'text-gray-200'}`}>{label}</Text>
                            </div>
                            
                        </li>
                    )}
                    )}
                </ul>
            </div>
            <div className={"flex flex-col gap-10"}>
                <Button className={"flex justify-around items-center w-28 hover:scale-105 drop-shadow-md bg-gray-700 text-gray-200 text-lg font-normal font-sans"}>
                    <Save />
                    Salvar
                </Button>
                <Button className={"flex justify-around items-center w-28 hover:scale-105 drop-shadow-md bg-gray-700 text-gray-200 text-lg font-normal font-sans"}>
                    <Thrash />
                    Excluir
                </Button>
            </div>
        </nav>
    );
}
