import Table, {IColumnOption} from "../../Table/Table";
import {Options} from "../../Options/Options";
import {useState} from "react";

interface IInscrito {
    id: number;
    nome: string;
    whatsapp: string;
    idade: string | undefined;
    dataNascimento: Date;
}

export function Inscritos() {
    const [toDelete, setToDelete] = useState<number | null>(null);

    function getIdade(id: number) {
        const dataNascimento = inscritos.find(inscrito => inscrito.id === id)?.dataNascimento;
        if(dataNascimento) {
            return (new Date().getFullYear() - dataNascimento.getFullYear()).toString();
        }
    }

    const headerOptions : IColumnOption[] = [
        {
            displayName: "Nome",
            valueKey: "nome",
            id: "nome",
            className: "justify-start"
        },
        {
            displayName: "Idade",
            valueKey: "idade",
            id: "idade",
        },
        {
            displayName: "WhatsApp",
            valueKey: "whatsapp",
            id: "whatsapp",
        },
        {
            displayName: "Time",
            valueKey: "time",
            id: "time",
        },
        {
            displayName: "Excluir",
            type: "action",
            valueKey: "id",
            transformCell: (id) => (<Options stroke={"#006666"}
                deleteCallback={() => setToDelete(id)}
            />),
            id: "excluir",
        },
    ];

    const inscritos: IInscrito[] = [
        {
            id: 1,
            nome: "Julio",
            whatsapp: "11 99990-9750",
            idade: "10",
            dataNascimento: new Date("2002/08/26")
        },
        {
            id: 2,
            nome: "Erick",
            whatsapp: "11 99990-9750",
            idade: "20",
            dataNascimento: new Date("2002/02/10")
        },
        {
            id: 3,
            nome: "Guilherme",
            whatsapp: "11 99990-9750",
            idade: "10",
            dataNascimento: new Date("2001/10/30")
        },
    ]

    return (
        <main className={"flex flex-col items-center h-full my-12 mx-8"}>
            <Table
                columns={headerOptions}
                data={inscritos}
            />
        </main>
    );
}
