import {useState} from "react";
import { Search } from "../../assets/Icons/Search/Search";
import { ComboUp } from "../../assets/Icons/ComboUp/ComboUp";
import { ComboDown } from "../../assets/Icons/ComboDown/ComboDown";

interface FilterProps {
    filters: string[];
}

export function Filter({ filters }: FilterProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={"flex"}>
            <div className={"flex items-center"}>
                <input
                    className={"bg-transparent placeholder-gray-500 placeholder:text-sm placeholder:font-sans outline-none"}
                    placeholder={"Buscar por"}
                />
                <Search />
            </div>
            <div className={"flex items-center"}>
                <select
                    className={"bg-transparent text-gray-500 appearance-none text-sm font-sans"}
                    onClick={() => setOpen(!open)}
                    onBlur={() => setOpen(false)}
                >
                    <option className={"bg-gray-900"}></option>
                    {filters.map((filter, index) => (
                        <option key={index} className={"bg-gray-900 text-sm font-sans"}>{filter}</option>
                    ))}
                </select>
                {open ? <ComboUp /> : <ComboDown />}
            </div>
        </div>
    );
}
