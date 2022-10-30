import { useState } from "react"


interface IHookProps {

}

interface IUseLogin{
  logado: boolean,
  setLogado: React.Dispatch<React.SetStateAction<boolean>>
}

export const useLogin = () : IUseLogin => {
  const [logado, setLogado] = useState<boolean>(false);


  return {
    logado,
    setLogado
  };

}