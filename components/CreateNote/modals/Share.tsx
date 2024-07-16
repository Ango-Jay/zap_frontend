import { ModalTransition } from "@/components/animation_utils/ModalTransition"
import XmarkIcon from "public/icons/x_mark.svg"
import CaretIcon from "public/icons/caret.svg"
import CopyIcon from "public/icons/copy_text.svg"
import UrlIcon from "public/icons/url.svg"


interface Props {
closeModal: ()=>void
}
export const ShareModal = (
    {
closeModal
    }:Props
)=>{
  const options = [
    {
     title:"Copy as Text",
     icon: <CopyIcon  className="w-full h-full fill-black" />,
     action: ()=>{
      
     }
    },
    {
      title:"Copy URL",
      icon: <UrlIcon className="w-full h-full fill-black p-2" />,
      action: ()=>{
       
      }
     }
  ]
    return(
        <ModalTransition>
                  <div className="flex flex-col bg-white sm:border sm:border-secondary w-full sm:max-w-lg h-[80%] sm:h-fit py-6 mt-auto sm:mt-0 rounded-t-2xl sm:rounded-2xl shadow-sm relative z-[210]">
        <div className="w-full px-6">
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-xl flex items-center justify-center ml-auto bg-secondary/20 border-half border-secondary lg:hover:bg-secondary/40"
          >
            <XmarkIcon className="fill-black/80 w-4 h-4" />
          </button>
          <h4 className="text-xl text-dark font-medium">Share Note</h4>
          <p className="text-sm text-gray">Choose share option below.</p>
          <div className="w-full flex flex-col gap-6 pt-6">
{
  options.map(item => (
    <button
    key={item.title}
    onClick={item.action}
    className="w-full flex gap-2 lg:hover:scale-[0.99]"
    >
<div className="w-10 h-10 bg-secondary/20 rounded-full">
{item.icon}
</div>
<div className="grow pb-4 border-b border-b-gray/20">
<p className="font-medium text-black">
  {item.title}
</p>
</div>
<CaretIcon className="fill-black" />
      </button>
  ))
}
            </div>
            </div>
          </div>
        </ModalTransition>
    )
}