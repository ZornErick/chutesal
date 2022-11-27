import TitleForm from "../../TitleForm/TitleForm";
import {Jogos} from "../../../pages/Jogos/Jogos";
import {Heading} from "../../Heading/Heading";
import {useParams} from "react-router-dom";

export function CampeonatoInfo() {
    const { id: idCampeonato } = useParams();

    return (
        <main className="flex flex-col gap-10 items-center h-full w-full">
            <TitleForm
                category="Campeonatos"
                subcategory={"Copa Mackenzie"}
                returnRoute="/campeonatos"
            />
            <div className={"flex flex-row w-full px-20 gap-x-72"}>
                <div className={"flex flex-col w-6/12"}>
                    <Heading className={"text-gray-200 font-normal mx-8"} size={"sm"}>Jogos do Campeonato</Heading>
                    <Jogos className={"my-0"} campeonatoId={idCampeonato} />
                </div>
                <div className={"flex w-6/12"}>
                    <Heading className={"text-gray-200 font-normal"} size={"sm"}>Classificação</Heading>
                </div>
            </div>
        </main>
    );
}
