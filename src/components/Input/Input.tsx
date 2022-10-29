import { Field } from "formik";
import LabelForm from "../LabelForm/LabelForm";


interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder:string;
}
export default ({label, name, id, placeholder, ...rest}: IInputProps) => {

  return(
    <div className="flex flex-col p-5 w-full">
      <Field className="w-full text-xs p-1 bg-transparent outline-0	text-white placeholder-white border-b border-b-gray-400" id={id} name={name} placeholder={placeholder} {...rest}/>  
      <LabelForm label={label} nameFor={name} />
    </div>

  );
}