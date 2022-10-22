import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "../../assets/Icons/Logo/Logo";
import { Exit } from "../../assets/Icons/Exit/Exit";
import { Text } from "../Text/Text";

export function Menu() {
    const routes = [
        {
            label: "Campeonatos",
            to: "/campeonatos"
        },
        {
            label: "Unidades",
            to: "/unidades"
        }
    ]

    const pathName = useLocation().pathname;

    return (
        <nav className={"flex bg-gray-700 w-full h-14 items-center justify-between"}>
            <NavLink to={"/"}><Logo className={"ml-6"} /></NavLink>
            <ul className={"flex h-full"}>
                {routes.map((route, index) => (
                    <li key={index} className={"flex flex-col h-full items-center justify-between"}>
                        <div></div>
                        <NavLink to={route.to}><Text className={"text-gray-200 px-3 hover:text-white"}>{route.label}</Text></NavLink>
                        {pathName === route.to ? (
                            <hr className={"w-12 border-y-1 border-green-700 bg-green-700"} />
                        ) : (<div></div>)}

                    </li>
                ))}
            </ul>
            <button className={"flex mr-6 items-center"}>
                <Exit />
                <Text className={"text-gray-200 px-2 hover:text-white"}>Logout</Text>
            </button>
        </nav>
    );
}
