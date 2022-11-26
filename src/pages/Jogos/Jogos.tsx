import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import apiInstance from "../../services/apit";
import Table, {IColumnOption} from "../../components/Table/Table";
import {ITime} from "../../components/Times/Times";
import {ICampeonato} from "../GerenciarCampeonato/GerenciarCampeonato";
import {Text} from "../../components/Text/Text";
import {convertToDate, convertToDateString} from "../../helpers/date";

interface IJogo {
    id: number;
    horario: string;
    data: string;
    hora: string;
    timeA: ITime;
    timeB: ITime;
    placarA: number;
    placarB: number;
    campeonato: ICampeonato;
    quadra: string;
    times: ITime[];
}

export function Jogos() {
    const [jogos, setJogos] = useState<IJogo[]>([]);

    const fetchData = async () => {
        try{
            const { data } = await apiInstance.get<IJogo[]>(`/jogo`);
            console.log({data});

            const formattedData : IJogo[] = data?.map(({
                id,
                horario,
                campeonato,
                quadra,
                placarA,
                placarB,
                times
            }) => {
                const [data, hora] = horario.split(" ");
                const [timeA, timeB] = times
                return ({
                    id,
                    horario,
                    data,
                    hora,
                    campeonato,
                    quadra,
                    times,
                    timeA,
                    timeB,
                    placarA,
                    placarB
                }) as IJogo
            });

            setJogos(formattedData);
        } catch(e){
            console.log({e});
            toast.error(`Não foi possível buscar os jogos`)
        }
    }

    const headerOptions : IColumnOption<IJogo>[] = [
        {
            displayName: "Time A",
            valueKey: "timeA",
            transformCell: ({value}) => (<Text className={"text-white"}>{value?.nome || ""}</Text>),
            id: "timeA",
        },
        {
            displayName: "Time B",
            valueKey: "timeB",
            transformCell: ({value}) => (<Text className={"text-white"}>{value?.nome || ""}</Text>),
            id: "timeB",
        },
        {
            displayName: "Placar A x B",
            valueKey: "placarA",
            transformCell: ({rowObject: {placarA, placarB}}) => (<Text className={"text-white"}>{placarA} x {placarB}</Text>),
            id: "placar",
        },
        {
            displayName: "Data",
            valueKey: "data",
            transformCell: ({value}) => (<Text className={"text-white"}>{convertToDateString(value)?.replaceAll("-", "/")}</Text>),
            id: "data",
        },
        {
            displayName: "Horario",
            valueKey: "hora",
            id: "hora",
        },
        {
            displayName: "Quadra",
            valueKey: "quadra",
            transformCell: ({value}) => (<Text className={"text-white"}>{value?.nome || ""}</Text>),
            id: "quadra",
        }
    ]

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <main className={"flex flex-col items-center h-full my-12 mx-8"}>
            <Table
                columns={headerOptions}
                data={jogos}
            />
        </main>
    );
}
