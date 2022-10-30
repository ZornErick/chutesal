import { Form, Formik } from "formik";
import Input from "../../Input/Input";
import Select from "../../Select/Select";

export function CampeonatoUpdateForm() {
    const status = [
        {
            id: 1,
            nome:"Planejado"
        },
        {
            id: 2,
            nome:"Em andamento"
        },
    ]

    const unidades = [
        {
            id: 1,
            nome: "Unidade 1",

        },
        {
            id: 2,
            nome: "Unidade 2",

        },
        {
            id: 3,
            nome: "Unidade 3",
        },
    ]

    return (
        <div className="w-4/5 h-full">
           <Formik
                initialValues={{
                    nomeCampeonato: '',
                    codigoUnidade: '',
                    statusCampeonato: '',

                    dataInicialInscricoes: '',
                    dataFinalInscricoes: '',

                    dataInicialJogos: '',
                    dataFinalJogos: '',

                    dataInicialDivulgacao: '',
                    dataFinalDivulgacao: ''
                }}
                onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                }}
            >
            <Form className="flex flex-col items-center justify-between h-full">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-5 w-2/5">
                        <Input
                            id="nome"
                            name="nomeCampeonato"
                            label="Nome do Campeonato"
                            placeholder=""
                        />
                        <Select
                            id="codigoUnidade"
                            name="codigoUnidade"
                            label="Unidade da Escola"
                            options={unidades.map(({id,nome}) => ({value: id, label: nome}))}
                        />
                        <Select
                            id="statusCampeonato"
                            name="statusCampeonato"
                            label="Status"
                            options={status.map(({id,nome})=>({value: id, label: nome}))}
                        />
                    </div>
                    <div className="flex flex-col gap-5 w-2/5">
                        <div className={"flex"}>
                            <Input
                                id="dataInicialInscricoes"
                                name="dataInicialInscricoes"
                                type="date"
                                label="Inscrições"
                                placeholder=""
                            />
                            <Input
                                id="dataFinalInscricoes"
                                name="dataFinalInscricoes"
                                type="date"
                                label="Inscrições"
                                placeholder=""
                            />
                        </div>
                        <div className={"flex"}>
                            <Input
                                id="dataInicialJogos"
                                name="dataInicialJogos"
                                type="date"
                                label="Jogos"
                                placeholder=""
                            />
                            <Input
                                id="dataFinalJogos"
                                name="dataFinalJogos"
                                type="date"
                                label="Jogos"
                                placeholder=""
                            />
                        </div>
                        <div className={"flex"}>
                            <Input
                                id="dataInicialDivulgacao"
                                name="dataInicialDivulgacao"
                                type="date"
                                label="Divulgação"
                                placeholder=""
                            />
                            <Input
                                id="dataFinalDivulgacao"
                                name="dataFinalDivulgacao"
                                type="date"
                                label="Divulgação"
                                placeholder=""
                            />
                        </div>
                    </div>  
                </div>
                <button type="submit">Salvar</button>
            </Form>
        </Formik>        
        </div>     
    );
}
