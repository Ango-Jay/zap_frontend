import { toggleHideSideBar } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import ArrowIcon from "public/icons/arrow.svg"
import { RichTextEditor } from "@/components/Forms/RichTextEditor";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { ShareModal } from "@/components/CreateNote/modals/Share";
import Editicon from "public/icons/edit.svg"
import clsx from "clsx";


export default function ViewNote () {
    const dispatch = useAppDispatch()
    useLayoutEffect(
      ()=>{
  dispatch(toggleHideSideBar(true))
      }, []
    );
    const [editorValue, setEditorValue] = useState("<p><span style=\"color: rgb(206, 145, 120);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>");
    const router = useRouter();
    const goToHome = ()=>{
        router.push("/dashboard/home");
    };
    const [showShareModal, setShowShareModal] = useState(false);
    const [showTitleEditor, setShowTitleEditor] = useState(false)
    const [titleEditorValue, setTitleEditorValue] = useState("<h2>Test note</h2>")
    return(
        <div className="flex flex-col items-center grow pt-10">
        <div className="flex flex-col w-full max-w-xl gap-3">
        <button
  onClick={goToHome}
  className="flex items-center gap-2 font-medium text-sm text-gray"
  >
   <ArrowIcon className="fill-gray w-4 h-4" />
   Back
  </button>
        <div className={
            clsx(
                "w-full flex items-center gap-3 mb-7",
                showTitleEditor && "!flex-col !items-start"
            )
        }>
{
    showTitleEditor ? (
<RichTextEditor 
type="basic"
value={titleEditorValue}
onChange={(value)=>setTitleEditorValue(value)}
/>
    ) : (
        <h2 className="text-black font-medium text-xl">
        Test note
    </h2>
    )
}
    <button 
    onClick={()=>{
        setShowTitleEditor(prev => !prev)
        if(showTitleEditor){
            console.log("saved");
            
        }
    }}
    className={
        clsx(
            "p-2 rounded-xl lg:hover:scale-[0.98]",
            showTitleEditor && "bg-primary text-white w-[100px]"
        )
    }>
{
    showTitleEditor ? "Save" :  <Editicon  className="w-4 h-4 fill-primary" />
}
    </button>
</div>


<div className="flex flex-col w-full p-4 min-h-[35rem] shadow-sm border border-[#085BA7]/10 rounded-lg">

<RichTextEditor 
type="advanced"
value={editorValue}
onChange={(value)=>setEditorValue(value)}
/>

<div className="w-full flex items-center gap-4 mt-4">
<SecondaryButton
onClick={()=>setShowShareModal(true)}
text='Share'
/>
<PrimaryButton
text="Save"
/>
</div>
</div>
</div>
{
showShareModal &&    <ShareModal closeModal={()=>{setShowShareModal(false)}} />
}
</div>
    )
}