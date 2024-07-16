import clsx from "clsx";
import { Header } from "./Header"
import { Sidebar } from "./Sidebar";
import { Inter } from "next/font/google";
import { UseAppState } from "@/store/appSlice/useAppState";

const inter = Inter({ subsets: ["latin"] });

interface Props {
    children: React.ReactNode;
}
export const AppLayout = (
    {
children
    }:Props
)=>{
    const {hideSideBar} = UseAppState()
    return(
        <main className={
            clsx(
                "flex flex-col w-full min-h-screen",
                inter.className
            )
        }>
            
            {
                hideSideBar ? 
                (<Header />) : 
                 (<Sidebar />)
            }
<div className={
    clsx(
        "flex flex-col w-full grow  pl-[18.75rem] bg-[#EFEFEF]/20",
        hideSideBar && "!pl-0"
    )
}>
    <div className="w-full container grow mx-auto px-6 sm:px-10">
    {
    children
}
    </div>

</div>
        </main>
    )
}