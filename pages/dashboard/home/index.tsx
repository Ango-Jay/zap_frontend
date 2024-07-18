import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";
import { toggleHideSideBar } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { formatHTMLToText } from "@/utils/formatHTMLToText";
import Image from "next/image";
import { useRouter } from "next/router";
import PlusIcon from "public/icons/plus.svg"
import { useLayoutEffect, useState } from "react";
import {Note, db} from "@/services/dexie/db"
import { useLiveQuery } from "dexie-react-hooks";
import { DeleteItemModal } from "@/components/Home/modals/DeleteItem";
import { useIsOnline } from "@/hooks/useIsOnline";



export default function Home() {
  const notes = useLiveQuery(()=> db.notes.toArray()) || [];
  const dispatch = useAppDispatch();
  const router = useRouter();
  useLayoutEffect(
    ()=>{
dispatch(toggleHideSideBar(false))
    }, []
  );
  const isOnline = useIsOnline();
  console.log(isOnline);
  
  const [active, setActive] = useState<Note>()
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const deleteNote = async(id:number)=>{
    try {
    await db.notes.delete(id);
    setShowDeleteModal(false)
    } catch (error) {
      return;
    }
  }
  return (
    <div className="w-full py-10">
      <h4 className="text-black text-xl font-semibold">My Notes</h4>

      {
        Boolean(notes.length)  ? (
          <>
          <PrimaryButton 
          onClick={()=>router.push("/dashboard/create-note")}
          className="!gap-2 max-w-[220px] mt-10 mb-6"
          icon={<PlusIcon className="w-4 h-4 fill-white" />}
          text="Add note"
          />
<div className="w-full grid grid-cols-3 xl:grid-cols-4 gap-6">
   {
    notes.map(item =>(
        <div
        key={item.id}
        className="w-full  p-4 shadow-sm border border-[#085BA7]/10 rounded">
        <div className="w-full h-[150px] overflow-hidden">
        <Image 
          src={"/images/note.svg"}
          width={400}
          height={300}
          className="w-full h-[300px] object-cover -mt-[70px]"
          alt=""
          />
        </div>
        <p className="text-black font-medium my-4">
            {item.title}
        </p>
        <p className="text-gray text-sm truncate ...">
            {
                formatHTMLToText(item.content)
            }
        </p>
{/* {
    item.tags.length && (
        <div
        className="w-full grid grid-cols-3 gap-3 mt-4"
        >
            {
                item.tags.map(item =>(
                    <p  
                    key={item}
                    className="bg-secondary-light rounded-xl py-2 text-black text-center text-xs lg:text-sm"
                    >
                        {item}
                    </p>
                ))
            }
        </div>
    )
} */}
<div className="w-full mt-4 flex gap-3">
<SecondaryButton 
onClick={()=>router.push(`/dashboard/note/${item.id}?title=bob`)}
textClassName="font-medium"
text="View"
/>
<button 
onClick={()=>{
  setActive(item)
  setShowDeleteModal(true)
}}
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
    ))
   }
      </div>
      </>
        ) : (
<div className="w-full flex flex-col gap-4 items-center py-[5rem]">
    <Image 
    src={"/images/not_found_note.svg"}
    width={640}
    height={630}
    className="w-[10.5rem]"
    alt=""
    />
    <p className="text-black font-medium">
        You have no saved notes at the moment
    </p>
<PrimaryButton 
          onClick={()=>router.push("/dashboard/create-note")}
className="!gap-2 max-w-[220px]"
icon={<PlusIcon className="w-4 h-4 fill-white" />}
text="Create note"
/>
</div>
        )
      }


    {
      showDeleteModal && active && (
        <DeleteItemModal 
        note={active}
        deleteItem={()=>{
        deleteNote(active.id)
        setShowDeleteModal(false)
        }}
        closeModal={()=>setShowDeleteModal(false)}
        />
      )
    }
    </div>
  );
}
