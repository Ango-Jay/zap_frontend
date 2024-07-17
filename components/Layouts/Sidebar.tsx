import clsx from "clsx";
import HomeIcon from "public/icons/home_menu.svg"
import LogoutIcon from "public/icons/logout.svg";


export const Sidebar = ()=>{
    const options = [
{
    name:"Home",
    link: "/dashboard/home",
    icon: <HomeIcon className="w-5 h-5 fill-[#7081A0] group-hover:!fill-[#10244F]" />, 
}
    ];
    return(
        <div className="w-[18.75rem] h-screen flex flex-col items-center fixed top-0 left-0 bg-white pt-6 border-r border-r-[#085BA7]/10">
 <h4 className="font-semibold text-black text-xl sm:text-2xl">
    Zap
</h4>

<div className="w-full flex flex-col grow mt-10 pb-[5rem] px-4">
    {
        options.map(item => (
            <button key={item.name} className="flex justify-center items-center gap-4 w-full py-4 relative group">
                {item.icon}
               <p className="font-medium text-black relative z-[2]">
               {item.name}
               </p>
               
              <div className={
                clsx(
                    "hidden absolute top-0 left-0 w-full h-full group-hover:block bg-secondary/50 rounded-xl",
                  
                )
              } />
               
            </button>
        ))
    }
    <div className="w-full mt-auto">
    <button
    className="flex items-center justify-center gap-4 w-full py-4 group"
    >
        <LogoutIcon className="w-6 h-6 fill-[#7081A0] group-hover:!fill-[#10244F]" />
    <p className="font-medium text-black">
        Logout
        </p>
    </button>
</div>
</div>

        </div>
    )
}