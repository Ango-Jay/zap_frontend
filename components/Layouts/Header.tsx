import { useState } from "react"
import { ImagePlaceholder } from "../ImagePlaceholder"
import CaretIcon from "public/icons/caret.svg"
import LogoutIcon from "public/icons/logout.svg";
import clsx from "clsx";
export const Header = ()=>{
    const [showMenuOptions, setShowMenuOptions] = useState(false)
    return(
        <div className="w-full bg-white shadow-sm border-b border-b-[#085BA7]/10">
<div className="w-full flex items-center justify-between container px-6 sm:px-10 py-4 mx-auto">
<h4 className="font-semibold text-black text-xl sm:text-2xl">
    Zap
</h4>
<div className="flex items-center gap-4">
<ImagePlaceholder
name="Test user"
/>
<div className="relative">
<button 
onClick={()=>setShowMenuOptions(prev => !prev)}
className={
    clsx(
        "flex items-center justify-center w-6 h-6 rounded-full rotate-90 transition-[transform] lg:hover:bg-primary/10",
        showMenuOptions && "!rotate-[-90deg]"
    )
}>
    <CaretIcon className="fill-black w-4 h-4" />
</button>
{
showMenuOptions && (
    <div className="absolute bottom-auto left-auto md:left-0 right-0 md:right-auto z-[999] mt-4  w-full min-w-[10rem] h-auto flex flex-col gap-4 items-center justify-center bg-white shadow-sm border border-[#EAEAEA] rounded-xl p-3">
    <button
    className="flex items-center justify-center gap-2 w-full py-2 group"
    >
        <LogoutIcon className="w-6 h-6 fill-[#7081A0] group-hover:!fill-[#10244F]" />
    <p className="font-medium text-black">
        Logout
        </p>
    </button>
  </div>
)
}
</div>
</div>
</div>
{showMenuOptions && (
        <div
          onClick={() => setShowMenuOptions(false)}
          className="w-full min-h-[100vh] fixed inset-0 z-[995]"
        ></div>
      )}
        </div>
    )
}