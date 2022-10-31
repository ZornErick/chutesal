import {InscreverSeForm} from "../../components/InscreverSe/InscreverSeForm/InscreverSeForm";
import {Button} from "../../components/Button/Button";
import {Back} from "../../assets/Icons/Back/Back";
import {Text} from "../../components/Text/Text";

export function Inscricao() {
    return (
        <main className={"flex flex-col h-full"}>
            <div className={"flex flex-col border-b border-green-700 h-32 mx-6 justify-around"}>
                <div>
                    <Text className={"text-gray-500 mx-6"} size={"lg"}>Inscrição</Text>
                </div>
                <Button className={"flex justify-around w-20 hover:scale-105 drop-shadow-md h-10 rounded-lg items-center bg-gray-700 text-gray-200 font-sans"}>
                    <Back />
                    Voltar
                </Button>
            </div>
            <div className={"flex justify-center items-center h-full w-full"}>
                <InscreverSeForm />
            </div>
        </main>
    );
}
