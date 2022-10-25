import { Text } from "../Text/Text";

interface HeaderProps {
    headerOptions: string[];
}

export function Header({ headerOptions }: HeaderProps) {
    return (
        <ul className={"flex"}>
            {headerOptions.map((text, index) => (
                <li key={index}>
                    <Text className={"text-gray-200"}>{text}</Text>
                </li>
            ))}
        </ul>
    );
}
