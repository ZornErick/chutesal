import {Heading} from "../../Heading/Heading";
import {TrophyFirstIcon} from "../../../assets/Icons/Trophy/TrophyFirst";
import {TrophySecondIcon} from "../../../assets/Icons/Trophy/TrophySecond";
import {TrophyThirdIcon} from "../../../assets/Icons/Trophy/TrophyThird";
import {Form, Formik} from "formik";
import Input from "../../Input/Input";

export function Vencedores() {
    return (
        <section className={"w-4/6"}>
            <Formik initialValues={
                {
                    v1: "Julio",
                    v2: "Erick",
                    v3: "Guilherme"
                }
            } onSubmit={() => {}}>
                <Form>
                    <div className={"flex items-center py-12"}>
                        <div className={"flex gap-3"}>
                            <Heading className={"text-gray-200 font-normal"} size={"md"}>1</Heading>
                            <TrophyFirstIcon />
                        </div>
                        <Input
                            id={"v1"}
                            name={"v1"}
                            footerText={"Primeiro lugar"}
                            disabled={true}
                        />
                    </div>
                    <div className={"flex items-center py-12"}>
                        <div className={"flex gap-3"}>
                            <Heading className={"text-gray-200 font-normal"} size={"md"}>2</Heading>
                            <TrophySecondIcon />
                        </div>
                        <Input
                            id={"v2"}
                            name={"v2"}
                            footerText={"Segundo Lugar"}
                            disabled={true}
                        />
                    </div>
                    <div className={"flex items-center py-12"}>
                        <div className={"flex gap-3"}>
                            <Heading className={"text-gray-200 font-normal"} size={"md"}>3</Heading>
                            <TrophyThirdIcon />
                        </div>
                        <Input
                            id={"v3"}
                            name={"v3"}
                            footerText={"Terceiro Lugar"}
                            disabled={true}
                        />
                    </div>
                </Form>
            </Formik>
        </section>
    );
}
