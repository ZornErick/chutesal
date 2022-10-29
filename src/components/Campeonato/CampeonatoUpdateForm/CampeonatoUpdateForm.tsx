import { Field, Form, Formik } from "formik";
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
                initialValues={{nomeCampeonato: '', codigoUnidade: '', statusCampeonato: ''}}
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
                            placeholder="Nome do Campeonato"
                        />
                        <Select
                            id="codigoUnidade"
                            name="codigoUnidade"
                            label="Unidade da escola"
                            placeholder="Unidade da escola"
                            options={unidades.map(({id,nome}) => ({value: id, label: nome}))}
                        />
                        <Select
                            id="statusCampeonato"
                            name="statusCampeonato"
                            label="Status"
                            placeholder="Status do campeonato"
                            options={status.map(({id,nome})=>({value: id, label: nome}))}
                        />

                    </div>
                    <div className="flex flex-col gap-5 w-2/5">
                        <Input
                            id="nome"
                            name="nomeCampeonato"
                            label="Nome do Campeonato"
                            placeholder="Nome do Campeonato"
                        />
                       <Input
                            id="nome"
                            name="nomeCampeonato"
                            label="Nome do Campeonato"
                            placeholder="Nome do Campeonato"
                        />
                        <Input
                            id="nome"
                            name="nomeCampeonato"
                            label="Nome do Campeonato"
                            placeholder="Nome do Campeonato"
                        />

                    </div>  
                </div>

                <button type="submit">Salvar</button>
            </Form>
        </Formik>        
        </div>     
    );
}
