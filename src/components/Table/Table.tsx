import { TableBody } from "./TableBody/TableBody";
import { Header } from "./TableHeader/TableHeader";

type ColumnType = "value" | "action";

type ColumnWidth = "w-12" | "w-44" | "w-96";


export interface IColumnOption {
    displayName: string;
    valueKey?: string;
    className?: string;
    width?: ColumnWidth;
    transformCell?: (value? : any) => any;
    type?: ColumnType;
    id: string;
}

interface ITableProps 
{
    columns : IColumnOption[],
    data: any[]
}


const Table = ({columns, data} : ITableProps) => {


    return (
            <div className={"w-full h-full mt-10"}>
                <Header columns={columns}></Header>
                <div className={"flex flex-col border-t-[1px] w-full h-full border-green-700 items-center"}>
                    <TableBody
                        columns={columns}
                        data={data}
                    />
                </div>
            </div>
    );
}



export default Table;