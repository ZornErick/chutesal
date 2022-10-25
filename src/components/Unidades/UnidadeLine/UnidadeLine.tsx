import { Text } from "../../Text/Text";
import { Options } from "../../Options/Options";

export function UnidadeLine() {
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

    return (
        <div className={"flex flex-col"}>
            {unidades.map((unidade, index) => (
                <ul key={index} className={"flex"}>
                    <li>
                        <Text className={"text-white"}>{unidade.numero}</Text>
                    </li>
                    <li>
                        <Text className={"text-white"}>{unidade.nome}</Text>
                    </li>
                    <li>
                        <Text className={"text-white"}>{unidade.endereco}</Text>
                    </li>
                    <Options />
                </ul>
            ))}
        </div>
    );
}
