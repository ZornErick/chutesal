interface ILabelProps {
   nameFor: string;
   label: string;
}

export default ({label , nameFor} : ILabelProps) => {
  return(
    <label className="w-full text-gray-400 text-xxs text-right" htmlFor={nameFor}>{label}</label>
  );
}