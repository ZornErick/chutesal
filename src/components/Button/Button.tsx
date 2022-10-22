import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={clsx(
            "py-1 px-1 bg-green-700 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-green-500 focus:ring-2 ring-white",
            className
        )}
                {...props}
        >
            {children}
        </button>
    );
}
