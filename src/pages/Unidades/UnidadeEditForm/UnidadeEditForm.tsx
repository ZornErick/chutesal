import { Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { Save } from "../../../assets/Icons/Save/Save";
import IconButton from "../../../components/IconButton/IconButton";
import Input from "../../../components/Input/Input";
import TitleForm from "../../../components/TitleForm/TitleForm";
import apiInstance from "../../../services/apit";
import { IUnidade } from "../Unidades";

interface ISubmitProps {
  nomeUnidade: string;
  numeroUnidade: string;
  cep: string;
  logradouro: string;
  numeroEndereco: string;
  cidade: string;
  bairro: string;
  uf: string;
}

export default () => {
  const onSubmit = async (
    {
      nomeUnidade,
      numeroUnidade,
      cep,
      logradouro,
      numeroEndereco,
      bairro,
      cidade,
      uf,
    }: ISubmitProps,
    { setSubmitting }: FormikHelpers<ISubmitProps>
  ) => {
    try {
      const { status, data } = await apiInstance.put<IUnidade>(`/unidade`, {
        nome: nomeUnidade,
        numero: numeroUnidade,
        endereco: {
          cep,
          logradouro,
          numero: numeroEndereco,
          bairro,
          localidade: cidade,
          uf,
        },
        quadrasId: [],
        campeonatosId: [],
      });

      console.log({ data });

      if (status === 201 && data) {
        toast.success(`Unidade atualizada com sucesso`);
      }
    } catch (e) {
      toast.error(`Não foi possível alterar a unidade`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full h-full">
      <TitleForm
        category="Unidades"
        subcategory="Incluir Unidades"
        returnRoute="/unidades"
      />
      <div className="p-20 w-2/4">
        <div>
          <Formik
            initialValues={{
              nomeUnidade: "",
              numeroUnidade: "",
              numeroEndereco: "",
              bairro: "",
              cep: "",
              cidade: "",
              logradouro: "",
              uf: "",
            }}
            onSubmit={onSubmit}
          >
            <Form className="flex flex-col gap-16 w-full">
              <div className="flex gap-20">
                <Input
                  id="nomeUnidade"
                  name="nomeUnidade"
                  footerText="Nome da Unidade"
                  placeholder="Nome da Unidade"
                />

                <Input
                  id="numeroUnidade"
                  name="numeroUnidade"
                  footerText="N° da Unidade"
                  placeholder="N° da Unidade"
                  containerWidth="w-2/6"
                />
              </div>
              <div className="w-3/5">
                <Input
                  id="cep"
                  name="cep"
                  footerText="CEP"
                  placeholder="00000000"
                />
              </div>
              <div className="flex">
                <Input
                  id="logradouro"
                  name="logradouro"
                  footerText="Logradouro"
                  placeholder="Rua da Unidade"
                  containerWidth="w-2/6"
                />
                <Input
                  id="nrEndereco"
                  name="nrEndereco"
                  footerText="N° do endereço"
                  placeholder="000"
                  containerWidth="w-1/6"
                />
                <Input
                  id="bairro"
                  name="bairro"
                  footerText="Bairro"
                  placeholder="Bairro da Unidade"
                  containerWidth="w-2/6"
                />
              </div>
            </Form>
          </Formik>
        </div>
        <div></div>
      </div>

      <IconButton
        className="p-2"
        type="submit"
        IconElement={Save}
        text="Incluir"
      />
    </section>
  );
};
