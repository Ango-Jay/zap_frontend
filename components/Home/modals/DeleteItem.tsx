import { ModalTransition } from "@/components/animation_utils/ModalTransition"
import { Note } from "@/services/dexie/db";
import { formatHTMLToText } from "@/utils/formatHTMLToText";
import Image from "next/image";
import XmarkIcon from "public/icons/x_mark.svg"


interface Props {
    note:Note;
    deleteItem: ()=>void;
    closeModal: ()=>void
}
export const DeleteItemModal = (
    {
        note,
        deleteItem,
        closeModal
    }:Props
)=>{
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
<h4 className="text-xl text-dark font-medium">Delete Note</h4>
<div className="w-full flex flex-col gap-6 pt-6">
    <p className="text-gray">
        You are about to delete this note <span className="text-black font-semibold bg-gray/10 rounded p-1">{formatHTMLToText(note.title)}</span>,  Would you like to proceed?
    </p>
    <button 
onClick={deleteItem}
className="flex gap-2 items-center justify-center gap-3 w-full py-3 bg-danger/10 rounded-xl lg:hover:opacity-80">
<Image
src={"/icons/trash_can2.svg"}
width={16}
height={16} 
alt=""
/>
  <p className="text-danger">
    Delete
  </p>
</button>
    </div>
    </div>
    </div>
    </ModalTransition>
    )
}