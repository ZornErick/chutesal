import { Button } from '../Button/Button';
import { Cancel  } from '../../assets/Icons/Cancel/Cancel'
import { Confirm } from '../../assets/Icons/Confirm/Confirm'

interface ModalContentProps{
  text: string;
  confirmText?: string;
  cancelText?: string;
  ModalIcon?: React.ElementType;
  closeModal: (value : any) => void;
  confirmModal: (value : any) => void
}




interface IButtonIconProps{
  text: string;
  icon?: string;
  IconElement?: React.ElementType
  action?: (value?: any) => void
}
const ButtonIcon = ({icon, IconElement, text, action} : IButtonIconProps) => {

  return(
    <div className='flex'>
      <Button className="w-36 text-gray-200 transition duration-75 hover:scale-110 flex gap-1 justify-center items-center bg-gray-700" onClick={action} >
        {icon ? <img  className="w-5 h-5 bg-green-700" src={icon} /> : <IconElement  className="w-5 h-5" />}
        <p>{text}</p>
      </Button>
    </div>
  );
}



export default ({text, closeModal, confirmModal, confirmText, cancelText, ModalIcon} : ModalContentProps) => {

  return (

    <div className={`flex flex-col ${ModalIcon ? `justify-between` : `gap-10 justify-center`} items-center flex-1`}>
      {
        ModalIcon && 
        (
          <ModalIcon/>
        )
      }
      <div>
        <p className='text-gray-200'>{text}</p>
      </div>
      <div className='flex justify-between w-full'>
        <ButtonIcon
          IconElement={Confirm}
          text={confirmText || 'Confirmar'}
          action={confirmModal}
        />
        <ButtonIcon
          IconElement={Cancel}
          text={cancelText || "Cancelar"}
          action={closeModal}
        />
      </div> 
    </div>


  )


}