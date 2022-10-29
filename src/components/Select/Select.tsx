import { Field } from "formik";
import LabelForm from "../LabelForm/LabelForm";


interface ISelectProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder:string;
  options: {label: string, value: number | string;}[]
}
export default ({label, name, id, placeholder, options, ...rest}: ISelectProps) => {

  return(
    <div className="flex flex-col p-5 w-full">
      <Field defaultValue={2} as="select" className="w-full text-xs p-1 bg-transparent outline-0	text-white placeholder-white border-b border-b-gray-400" id={id} name={name} placeholder={placeholder} {...rest}>
        <option className="bg-gray-700 p-1" value={undefined}></option>
        {
          options.map(({label, value}) => <option className="bg-gray-700 p-1" value={value}>{label}</option>)
        }   
      </Field> 
      <LabelForm label={label} nameFor={name} />
    </div>

  );
}