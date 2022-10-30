import React from "react";
import { Field } from "formik";
import InpuFooter from "../InputFooter/InputFooter";


interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  placeholder?:string;
  removeFooter?: boolean
  footerText?: string;
}
export default ({label, name, id, placeholder, className, removeFooter, footerText, ...rest}: IInputProps) => {

  return(
    <div className="flex flex-col p-5 w-full">
      {
        label && <label className="w-full text-gray-400 text-xxs text-left" htmlFor={name}>{label}</label>
      }
      <Field className={`w-full disabled:text-gray-400 text-xs p-1 bg-transparent outline-0	text-white placeholder-gray-500 border-b border-b-gray-400 ${className}`} id={id} name={name} placeholder={placeholder} {...rest}/>  
      { !removeFooter && footerText && <InpuFooter label={footerText} />}
    </div>
  );
}
