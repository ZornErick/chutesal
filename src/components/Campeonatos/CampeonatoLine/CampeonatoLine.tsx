import { Text } from "../../Text/Text";
import { Options } from "../../Options/Options";

export function CampeonatoLine() {
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
    ]

    return (
        <div className={"flex flex-col"}>
            {campeonatos.map((campeonato, index) => (
                <ul key={index} className={"flex"}>
                    <li>
                        <Text className={"text-white"}>{campeonato.nome}</Text>
                    </li>
                    <li>
                        <Text className={"text-white"}>{campeonato.status}</Text>
                    </li>
                    <li>
                        <Text className={"text-white"}>{campeonato.unidade}</Text>
                    </li>
                    <li>
                        <Text className={"text-white"}>{campeonato.inscricoes}</Text>
                    </li>
                    <li>
                        <Text className={"text-white"}>{campeonato.duracao}</Text>
                    </li>
                    <Options />
                </ul>
            ))}
        </div>
    );
}
