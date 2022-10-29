import {Button} from "../../Button/Button";
import {Text} from "../../Text/Text";
import {CampeonatoNavIcon} from "../../../assets/Icons/CampeonatoNavIcon/CampeonatoNavIcon";
import {JogoNavIcon} from "../../../assets/Icons/JogoNavIcon/JogoNavIcon";
import {InscritoNavIcon} from "../../../assets/Icons/InscritoNavIcon/InscritoNavIcon";
import {TimeNavIcon} from "../../../assets/Icons/TimeNavIcon/TimeNavIcon";
import {VencedorNavIcon} from "../../../assets/Icons/VencedorNavIcon/VencedorNavIcon";
import {Thrash} from "../../../assets/Icons/Thrash/Thrash";
import {Save} from "../../../assets/Icons/Save/Save";

export function CampeonatoMenu() {
    const menuOptions = [
        {
            label: "Campeonato",
            icon: <CampeonatoNavIcon />
        },
        {
            label: "Jogos",
            icon: <JogoNavIcon />
        },
        {
            label: "Inscritos",
            icon: <InscritoNavIcon />
        },
        {
            label: "Times",
            icon: <TimeNavIcon />
        },
        {
            label: "Vencedores",
            icon: <VencedorNavIcon />
        }
    ]

    return (
        <nav className={"flex flex-col items-center"}>
            <div>
                <ul>
                    {menuOptions.map((option, index) => (
                        <li key={index} className={"flex p-6 items-center gap-2 hover:scale-105"}>
                            {option.icon}
                            <Text className={"text-gray-200"}>{option.label}</Text>
                        </li>
                    ))}
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
