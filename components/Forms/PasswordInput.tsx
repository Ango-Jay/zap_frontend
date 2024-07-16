import { ErrorMessage, Field } from "formik";
import { type InputHTMLAttributes, useState } from "react";
import EyeOpenIcon from "public/icons/eye.svg";
import EyeCloseIcon from "public/icons/eye_closed.svg";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
  isError:boolean;
  placeholder: string;
  disabled?: boolean;
}

export const PasswordInput = ({
  labelText,
  name,
  className,
  placeholder,
  isError,
  disabled,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <label htmlFor={name} className="text-[13px] text-[#454547]">
        {labelText}
      </label>
      <div className="flex shrink-0 grow-0 w-full relative">
        <Field
          type={!showPassword ? "password" : "text"}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(
            "w-full rounded-xl border border-stroke border-solid  py-3 px-4 mt-2 focus:border-b-[2px] focus:border-b-[#C0D2F9] focus:!rounded-b !outline-0 focus:outline-0 lg:hover:border-b-[2px] lg:hover:border-b-[#C0D2F9] lg:hover:!rounded-b disabled:border-[1px] disabled:!border-b-gray",
            { "border-b-[2px] !border-b-[#F04438] !rounded-b": isError },
            className
          )}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="ml-2 absolute right-[1rem] w-[20px] h-[20px] bottom-[45%] translate-y-[50%]"
        >
          {showPassword ? (
            <EyeOpenIcon className="stroke-[#868C98] w-full h-full" />
          ) : (
            <EyeCloseIcon className="stroke-[#868C98] w-full h-full" />
          )}
        </button>
      </div>

      <ErrorMessage name={name}>
        {(msg) => <div className="text-sm text-red-500 mt-1">{msg}</div>}
      </ErrorMessage>
    </>
  );
};
