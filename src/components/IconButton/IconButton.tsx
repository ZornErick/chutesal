import { ButtonHTMLAttributes } from "react";
import { Button } from "../Button/Button";

interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string; 
  text: string;
  icon?: string;
  IconElement?: React.ElementType
  action?: (value?: any) => void
}
export default ({icon, IconElement, text, action, className, ...props} : IButtonIconProps) => {

  return(
    <div className='flex'>
      <Button className={`w-36 text-gray-200 transition duration-75 hover:scale-110 flex gap-1 justify-center items-center ${className} bg-gray-700 `} onClick={action} {...props} >
        {icon ? <img className="w-5 h-5 bg-green-700" src={icon} alt={"ícone"} /> : <IconElement  className="w-5 h-5" />}
        <p>{text}</p>
      </Button>
    </div>
  );
}