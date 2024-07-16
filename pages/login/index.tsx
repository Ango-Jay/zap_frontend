import { PrimaryButton } from "@/components/Buttons/PrimaryButton"
import { PasswordInput } from "@/components/Forms/PasswordInput"
import { TextInput } from "@/components/Forms/TextInput"
import { toggleHideSideBar } from "@/store/appSlice"
import { useAppDispatch } from "@/store/hooks"
import { Formik, Form } from "formik"
import Image from "next/image"
import { useLayoutEffect } from "react"

export default function Login () {
    const dispatch = useAppDispatch()
    useLayoutEffect(
        ()=>{
          dispatch(toggleHideSideBar(true))
        }, []
    )
    return(
     <div className="w-full min-h-screen flex justify-center pt-10">
           <div className="flex flex-col grow-0 w-full max-w-lg h-fit shadow-sm border border-[#085BA7]/10 rounded-xl p-6 sm:p-10">
<h2 className="text-3xl font-semibold text-black text-center">
    Login 
</h2>
<div className="w-full mt-6">
<button className="relative flex items-center justify-center w-full rounded-xl border border-stroke border-solid  py-3 px-4 lg:hover:bg-primary-light/30">
<Image
src={"/icons/google.svg"}
width={20}
height={20} 
className="absolute top-4 left-4"
alt=""
/>
    <p>
    Login with Google
    </p>
</button>
</div>
<div className="w-full flex justify-center py-2 my-4 relative">
   <p className="w-fit px-2 text-sm text-gray text-center text-black font-medium bg-white relative z-[1]">
   OR
   </p>
   <div className="absolute top-[50%] w-full border-t border-t-stroke "/>
</div>
<div className="w-full">
    <Formik
    initialValues={{
        email:"",
        password:""
    }}
    onSubmit={(values)=>{
        //  submit
    }}
    >
        <Form className="w-full flex flex-col gap-4">
            <div className="w-full">
<TextInput 
name="email"
labelText="Email"
placeholder="Enter email"
isError={false}
/>
            </div>
            <div className="w-full">
<PasswordInput 
name="password"
labelText="Password"
placeholder="Enter password"
isError={false}
/>
            </div>
            <PrimaryButton 
            className="w-full"
            text="Login"
            />
        </Form>
    </Formik>
</div>
</div>
     </div>
    )
}