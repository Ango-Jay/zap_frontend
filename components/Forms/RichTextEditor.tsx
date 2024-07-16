import clsx from 'clsx';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(()=>(import("react-quill").then(res => res)), {ssr: false})
import 'react-quill/dist/quill.snow.css';

interface Props {
    value:string;
    onChange: (value:string)=>void;
    type: "basic" | "advanced"
    className?:string
};

export const RichTextEditor = (
    {
value,
onChange,
className,
type
    }:Props
)=>{
    return(
        <ReactQuill
        theme='snow'
      value={value}
      onChange={(value) => onChange(value)}
      modules={{
        toolbar: type === "basic" ? false : true
      }}
      className={
        clsx(
            'flex flex-col grow w-full',
            className
        )
      }
    />
    )
}