import {Button} from "../../Button/Button";
import {Text} from "../../Text/Text";
import {Thrash} from "../../../assets/Icons/Thrash/Thrash";
import {Save} from "../../../assets/Icons/Save/Save";
import { IMenuElement } from "../../../pages/Manager/GerenciarCampeonato/GerenciarCampeonato";


interface IMenuProps {
    menuOptions:  {[key : number] : IMenuElement};
    selectedComponent: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>
}

export function CampeonatoMenu({ menuOptions, selectedComponent, setSelected }: IMenuProps) {
    return (
        <nav className={"flex flex-col items-center gap-10 h-full"}>
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
            <span className="h-[0.5px] bg-gray-400 w-full" />
            <div className={"flex flex-col gap-10"}>
                <Button form="form-campeonato" className={"flex justify-around items-center w-28 transition duration-150 hover:scale-105 drop-shadow-md bg-gray-700 text-gray-200 text-lg font-normal font-sans"}>
                    <Save />
                    Salvar
                </Button>
                <Button className={"flex justify-around items-center w-28 transition duration-150 hover:scale-105 drop-shadow-md bg-gray-700 text-gray-200 text-lg font-normal font-sans "}>
                    <Thrash />
                    Excluir
                </Button>
            </div>
        </nav>
    );
}
