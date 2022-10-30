import { Form, Formik} from "formik";
import Input from "../../Input/Input";
import {Button} from "../../Button/Button";
import {EnviarIcon} from "../../../assets/Icons/EnviarIcon/EnviarIcon";

export function InscreverSeForm() {
    return (
        <div className={"flex justify-center w-full"}>
            <Formik
                initialValues={{
                    nomeCompleto: "",
                    apelido: "",
                    whatsApp: "",
                    idade: ""
                }}
                onSubmit={() => {}}
            >
                <Form className={"w-1/3"}>
                    <div>
                        <Input
                            id={"nomeCompleto"}
                            name={"nomeCompleto"}
                            label={"Nome Completo"}
                            placeholder={""}
                        />
                        <Input
                            id={"apelido"}
                            name={"apelido"}
                            label={"Apelido"}
                            placeholder={""}
                        />
                        <Input
                            id={"whatsApp"}
                            name={"whatsApp"}
                            label={"WhatsApp"}
                            placeholder={""}
                        />
                        <Input
                            id={"idade"}
                            name={"idade"}
                            label={"Idade"}
                            placeholder={""}
                        />
                    </div>
                    <div className={"flex justify-center"}>
                        <Button type={"submit"} className={"flex items-center justify-center w-48 h-10 hover:scale-105 drop-shadow-md gap-2 bg-gray-700 text-gray-200 font-sans"}>
                            <EnviarIcon />
                            Enviar Inscrição
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
