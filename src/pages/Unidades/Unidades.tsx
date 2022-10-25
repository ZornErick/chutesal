import { Header } from "../../components/Table/TableHeader/TableHeader";
import { Button } from "../../components/Button/Button";
import { Plus } from "../../assets/Icons/Plus/Plus";
import { Filter } from "../../components/Filter/Filter";
import { Options } from "../../components/Options/Options";
import { TableBody } from "../../components/Table/TableBody/TableBody";
import Table, { IColumnOption } from "../../components/Table/Table";

export function Unidades() {


    const headerOptions : IColumnOption[] = [          
        {
            displayName: "Número",
            valueKey: "numero",
            id: "numero",

        },
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
        },
        {
            displayName: "Endereço",
            valueKey: "endereco",
            id: "endereco",
        },
        {
            displayName: "Opções",
            id: "opcoes",
            transformCell: () => <Options  editCallback={() => {}} deleteCallback={() => {}}/>
        },     
    ];

    const unidades = [
        {
            numero: "25",
            nome: "Higienóvoles Potentes",
            endereco: "Rua Pará, 369",
        },
        {
            numero: "30",
            nome: "Higienóvoles Paratis",
            endereco: "Rua Maria Antônia, 369",
        }
    ]

    const filterOptions = ["Número", "Nome"];

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
                data={unidades}
            />
        </main>
    );
}
