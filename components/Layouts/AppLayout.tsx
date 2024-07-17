import Head from "next/head";
import clsx from "clsx";
import { Header } from "./Header"
import { Sidebar } from "./Sidebar";
import { Inter } from "next/font/google";
import { UseAppState } from "@/store/appSlice/useAppState";


const inter = Inter({ subsets: ["latin"] });

interface Props {
    children: React.ReactNode;
    title: string
}
export const AppLayout = (
    {
children,
title
    }:Props
)=>{
    
    const {hideSideBar} = UseAppState();

    return(
        <>
            <Head>
        <title>{`${title} | Zap - Ideas on the go`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={"zap ideas notes"} />
        <meta name="description" content={"zap the ideas app"} />
        <meta charSet="utf-8" />
      </Head>
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
        </>
    )
}