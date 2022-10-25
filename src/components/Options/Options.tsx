import { Edit } from "../../assets/Icons/Edit/Edit";
import { Thrash } from "../../assets/Icons/Thrash/Thrash";

interface IOptionsProps{
    editCallback: () => void;
    deleteCallback: () => void;
}

export function Options({editCallback, deleteCallback} : IOptionsProps) {
    return (
        <div className={"flex gap-2"}>
            <button onClick={editCallback}>
                <Edit />
            </button>
            <button onClick={deleteCallback}>
                <Thrash />
            </button>
        </div>
    );
}
