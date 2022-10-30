import {Button} from "../Button/Button";
import {UserIcon} from "../../assets/Icons/UserIcon/UserIcon";

interface InscreverSeProps {
    inscrevaSeCallback: () => void;
}

export function InscreverSe({inscrevaSeCallback}: InscreverSeProps) {
    return (
        <div>
            <Button className={"flex bg-transparent items-center gap-1 text-white font-normal font-sans"}>
                <UserIcon />
                Inscreva-se
            </Button>
        </div>
    );
}
