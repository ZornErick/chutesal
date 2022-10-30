import React from "react";
import { Field } from "formik";
import LabelForm from "../InputFooter/InputFooter";


interface ISelectProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder? :string;
  className?: string;
  options: {label: string, value: number | string;}[]
}
export default ({label, name, id, placeholder, options, className, ...rest}: ISelectProps) => {

  return(
    <div className={`flex flex-col p-5 w-full ${className}`}>
      <Field defaultValue={2} as="select" className="w-full  disabled:text-gray-400 text-xs p-1 bg-transparent outline-0 text-white placeholder-white border-b border-b-gray-400" id={id} name={name} placeholder={placeholder} {...rest}>
        <option className="bg-gray-700 p-1" value={undefined}></option>
        {
          options.map(({label, value}, index) => <option key={index} className="bg-gray-700 p-1" value={value}>{label}</option>)
        }
      </Field> 
      <LabelForm label={label} />
    </div>
  );
}
