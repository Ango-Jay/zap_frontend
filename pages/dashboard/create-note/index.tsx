import { PrimaryButton } from '@/components/Buttons/PrimaryButton';
import { RichTextEditor } from '@/components/Forms/RichTextEditor';
import { useLayoutEffect, useState } from 'react';
import ArrowIcon from "public/icons/arrow.svg"
import { useRouter } from 'next/router';
import { SecondaryButton } from '@/components/Buttons/SecondaryButton';
import { ShareModal } from '@/components/CreateNote/modals/Share';
import { useAppDispatch } from '@/store/hooks';
import { toggleHideSideBar } from '@/store/appSlice';
import { SaveModal } from '@/components/CreateNote/modals/Save';


export default function CreateNote () {
    const dispatch = useAppDispatch()
    useLayoutEffect(
      ()=>{
  dispatch(toggleHideSideBar(true))
      }, []
    );
    const [editorValue, setEditorValue] = useState('');
    const router = useRouter();
    const goToHome = ()=>{
        router.push("/dashboard/home");
    };
    const [showShareModal, setShowShareModal] = useState(false);
    const [isNextStage, setIsNextStage] = useState(false)
    return(
        <div className="flex flex-col items-center grow pt-10">
                 <div className="flex flex-col w-full max-w-xl gap-2">
           <button
           onClick={goToHome}
           className="flex items-center gap-2 font-medium text-sm text-gray"
           >
            <ArrowIcon className="fill-gray w-4 h-4" />
            Back
           </button>
  
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
onClick={()=>{
    setIsNextStage(true)
}}
 text="Next"
 />
</div>
        </div>
        </div>
        {
        showShareModal &&    <ShareModal closeModal={()=>{setShowShareModal(false)}} />
        }
        {
            isNextStage && (
                <SaveModal
                 closeModal={()=>setIsNextStage(false)} 
                 editorValue={editorValue}
                 />
            )
        }
        </div>
    )
}