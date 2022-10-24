import { Header } from "../../components/Header/Header";
import {UnidadeLine} from "../../components/Unidades/UnidadeLine/UnidadeLine";
import {Filter} from "../../components/Filter/Filter";

export function Unidades() {
    const headerOptions = ["Número", "Nome", "Endereço", "Opções"];
    const filterOptions = ["Número", "Nome"];

    return (
        <main className={"flex flex-col items-center"}>
            <div className={"flex w-full justify-between"}>
                <button className={"text-white"}>Incluir</button>
                <Filter filters={filterOptions} />
            </div>
            <Header headerOptions={headerOptions}></Header>
            <UnidadeLine></UnidadeLine>
        </main>
    );
}
