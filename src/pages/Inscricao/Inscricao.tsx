import {InscreverSeForm} from "../../components/InscreverSe/InscreverSeForm/InscreverSeForm";

export function Inscricao() {
    return (
        <main className={"flex flex-col h-full"}>
            <div className={"flex border-b border-green-700 h-32 mx-6"}>

            </div>
            <div className={"flex justify-center items-center h-full w-full"}>
                <InscreverSeForm />
            </div>
        </main>
    );
}
