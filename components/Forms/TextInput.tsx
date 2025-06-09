import clsx from "clsx";
import { ErrorMessage, Field } from "formik";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name:string;
    labelText:string;
    isError:boolean;
    className?:string
}
export const TextInput = (
    {
name,
labelText,
isError,
className,
...props
    }:Props
)=>{
    return(
        <>
        <label htmlFor={name} className="capitalize text-[#454547] text-[13px]">
          {labelText}
        </label>
        <Field
          type={props.type ? props.type : "text"}
          name={name}
          className={clsx(
            "w-full rounded-xl border border-stroke border-solid  py-3 px-4 mt-2 focus:border-b-[2px] focus:border-b-[#C0D2F9] focus:!rounded-b !outline-0 focus:outline-0 lg:hover:border-b-[2px] lg:hover:border-b-[#C0D2F9] lg:hover:!rounded-b disabled:border-[1px] disabled:!border-b-gray",
            { "border-b-[2px] !border-b-[#F04438] !rounded-b": isError },
            className
          )}
          {...props}
        />
  
        <ErrorMessage name={name!}>
          {(msg) => <div className="text-sm text-red-500 mt-1">{msg}</div>}
        </ErrorMessage>
      </>
    )
}