import clsx from "clsx";
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?:React.ReactNode;
    text?:string;
    className?:string;
    textClassName?:string;
}
export const PrimaryButton = (
    {
children,
icon,
text,
className,
textClassName,
...props
    }:Props
)=>{
    return(
        <button
        className={
            clsx(
                "flex items-center justify-center gap-3 w-full py-3 bg-primary rounded-xl lg:hover:opacity-80 disabled:bg-primary-light",
                className
            )
        }
      {...props}
      >
            {
                text || icon ? (
                 <>
                 {icon}
                 <p className={
                    clsx(
                        "text-white",
                        props.disabled && "!text-black/50",
                        textClassName
                    )
                 }>
                    {text}
                 </p>
                 </>
                ) : (
                    <>
                    {children}
                    </>
                )
            }
        </button>
    )
}