import {Filter} from "../../../components/Filter/Filter";
import Table, {IColumnOption} from "../../../components/Table/Table";
import {InscreverSeButton} from "../../../components/InscreverSe/InscreverSeButton/InscreverSeButton";
import {useNavigate} from "react-router-dom";

export function UserCampeonatos() {
    const navigate = useNavigate();

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
            type: "action",
            valueKey: "id",
            transformCell: (id) => (
                <InscreverSeButton inscrevaSeCallback={() => navigate(`${id}`)} />
            ),
            id: "inscreverse",
        },
    ];

    const campeonatos = [{

    }]

    return (
        <>
            <main className={"flex flex-col items-center h-full my-12 mx-8"}>
                <div className={"flex w-full justify-end"}>
                    <Filter filters={filterOptions} />
                </div>
                <Table
                    columns={headerOptions}
                    data={campeonatos}
                />
            </main>
        </>
    );
}
