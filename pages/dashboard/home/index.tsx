import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";
import { toggleHideSideBar } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { formatHTMLToText } from "@/utils/formatHTMLToText";
import Image from "next/image";
import { useRouter } from "next/router";
import PlusIcon from "public/icons/plus.svg"
import { useLayoutEffect } from "react";


export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter()
  useLayoutEffect(
    ()=>{
dispatch(toggleHideSideBar(false))
    }, []
  );
  const notes = [
    {
      id: 1,
      title: "Test Note",
      content:"<p><span style=\"color: rgb(206, 145, 120);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>",
      tags:[
        "test", "work"
      ]
    },
    {
      id: 2,
      title: "Test Note",
      content:"<p><span style=\"color: rgb(206, 145, 120);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>",
      tags:[
        "test", "work"
      ]
    },
    {
      id: 3,
      title: "Test Note",
      content:"<p><span style=\"color: rgb(206, 145, 120);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>", 
      tags:[
        "test", "work"
      ]
    },
    {
      id: 4,
      title: "Test Note",
      content:"<p><span style=\"color: rgb(206, 145, 120);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>",
      tags:[
        "test", "work"
      ]
    },

  ];
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
{
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
}
<SecondaryButton 
onClick={()=>router.push(`/dashboard/note/${item.id}`)}
className="mt-4"
textClassName="font-medium"
text="View"
/>
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
className="!gap-2 max-w-[220px]"
icon={<PlusIcon className="w-4 h-4 fill-white" />}
text="Create note"
/>
</div>
        )
      }
    </div>
  );
}
