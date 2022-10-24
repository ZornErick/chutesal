import { Header } from "../../components/Header/Header";
import {CampeonatoLine} from "../../components/Campeonatos/CampeonatoLine/CampeonatoLine";
import {Filter} from "../../components/Filter/Filter";

export function Campeonatos() {
    const headerOptions = ["Nome", "Status", "Unidade", "Inscrições", "Duração", "Opções"];
    const filterOptions = ["Nome", "Inscrições", "Duração"];

    return (
        <main className={"flex flex-col items-center"}>
            <div className={"flex w-full justify-between"}>
                <button className={"text-white"}>Incluir</button>
                <Filter filters={filterOptions} />
            </div>
            <Header headerOptions={headerOptions}></Header>
            <CampeonatoLine></CampeonatoLine>
        </main>
    );
}
