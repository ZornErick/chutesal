import {Button} from "../../../components/Button/Button";
import {Plus} from "../../../assets/Icons/Plus/Plus";
import {Filter} from "../../../components/Filter/Filter";
import Table, {IColumnOption} from "../../../components/Table/Table";

export function UserCampeonatos() {
    const filterOptions = ["Nome", "Inscrições", "Duração"];

    const headerOptions : IColumnOption[] = [
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
            className: "justify-start"
        },
        {
            displayName: "Unidade",
            valueKey: "unidade",
            id: "nomeUnidade",
        },
        {
            displayName: "Status",
            valueKey: "status",
            id: "status",
        },
        {
            displayName: "Inscrições",
            valueKey: "inscricoes",
            id: "inscricoes",
        },
        {
            displayName: "Duração",
            valueKey: "duracao",
            id: "duracao",
        },
        {
            displayName: "Inscrever-se",
            valueKey: "inscreverse",
            id: "inscreverse",
        },
    ];

    const campeonatos = [{

    }]

    return (
        <main className={"flex flex-col items-center h-full my-12 mx-8"}>
            <div className={"flex w-full justify-between"}>
                <Button className={"flex justify-around w-24 hover:scale-105 drop-shadow-md h-10 rounded-lg items-center bg-gray-700 text-gray-200 font-sans"}>
                    <Plus />
                    Incluir
                </Button>
                <Filter filters={filterOptions} />
            </div>
            <Table
                columns={headerOptions}
                data={campeonatos}
            />
        </main>
    );
}
