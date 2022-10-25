import { Header } from "../../components/Table/TableHeader/TableHeader";
import { Filter } from "../../components/Filter/Filter";
import { Button } from "../../components/Button/Button";
import { Plus } from "../../assets/Icons/Plus/Plus";
import { TableBody } from "../../components/Table/TableBody/TableBody";
import { Options } from "../../components/Options/Options";
import Table, { IColumnOption } from "../../components/Table/Table";


export function Campeonatos() {

    const headerOptions : IColumnOption[] = [          
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
            className: "justify-start"
        },
        {
            displayName: "Status",
            valueKey: "status",
            id: "status",
        },
        {
            displayName: "Unidade",
            valueKey: "unidade",
            id: "nomeUnidade",
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
            displayName: "Opções",
            type: "action",
            transformCell: () => <Options editCallback={() => {}} deleteCallback={() => {}}/>,
            id: "opcoes",

        },     
    ];
    const filterOptions = ["Nome", "Inscrições", "Duração"];
    const campeonatos = [
        {
            nome: "Copa Mackenzie",
            status: "ANDAMENTO",
            unidade: "Higienóvoles Potentes",
            inscricoes: "21/12/2022 - 31/12/2022",
            duracao: "01/01/2023 - 31/01/2023"
        },
        {
            nome: "Copa Kenzie",
            status: "FINALIZADO",
            unidade: "Higienóvoles Carentes",
            inscricoes: "21/12/2022 - 31/12/2022",
            duracao: "01/01/2023 - 31/01/2023"
        }
    ];
    return (
        <main className={"flex flex-col items-center h-full my-12 mx-8"}>
            <div className={"flex w-full w- justify-between"}>
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

