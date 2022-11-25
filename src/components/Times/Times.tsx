import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Thrash } from "../../assets/Icons/Thrash/Thrash";
import apiInstance from "../../services/apit";
import Modal from "../Modal/Modal";
import TimeForm from "./TimeForm";
import TimeLine from "./TimeLine";

export interface ITime {
  id: number;
  nome: string;
}

interface TimesProps {
  times: ITime[];
  reFetch: () => Promise<void>;
}

export default ({ times, reFetch }: TimesProps) => {
  const [toDelete, setToDelete] = useState<number | null>(null);

  const deleteTime = async () => {
    try {
      const { status, data } = await apiInstance.delete(`/time/${toDelete}`);

      if (status === 200) {
        toast.success(`Time excluído com sucesso`);
        reFetch();
      }
    } catch (e) {
      console.log(e);
      toast.error(`Não foi possível excluir o time`);
    } finally {
      setToDelete(null);
    }
  };

  return (
    <section className="w-full h-full flex p-6 justify-center gap-20 ">
      <div className="w-2/5 flex flex-col justify-between  ">
        <div className="flex items-center flex-col w-full gap-20 ">
          {times.map((time) => (
            <TimeLine
              key={time.id}
              time={time}
              deleteCallback={() => setToDelete(time.id)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-white">1-1</p>
        </div>
      </div>

      <span className="h-full bg-slate-400 w-[1px]" />
      <TimeForm fetchTimes={reFetch} />

      <Modal
        open={toDelete !== null}
        Icon={Thrash}
        modalText="Deseja excluir o time?"
        confirmAction={deleteTime}
        cancelAction={() => setToDelete(null)}
      />
    </section>
  );
};
