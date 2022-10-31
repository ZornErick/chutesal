import React, { ButtonHTMLAttributes } from "react";
import { Button } from "../Button/Button";
import {clsx} from "clsx";

interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string; 
  text: string;
  icon?: string;
  IconElement?: React.ElementType;
  transparent?: boolean;
  action?: (value?: any) => void;
}
export default ({icon, IconElement, text, action, className, transparent, ...props} : IButtonIconProps) => {

  return(
    <div className='flex'>
      <Button className={clsx(
          "w-36 text-gray-200 transition duration-75 hover:scale-110 flex gap-1 justify-center items-center",
          {
            "bg-gray-700": transparent === false,
            "bg-transparent": transparent === true
          }
      )} onClick={action} {...props} >
        {icon ? <img className="w-5 h-5 bg-green-700" src={icon} alt={"ícone"} /> : <IconElement className="w-5 h-5" />}
        <p>{text}</p>
      </Button>
    </div>
  );
}
