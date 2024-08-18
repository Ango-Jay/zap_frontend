import { PrimaryButton } from "@/components/Buttons/PrimaryButton"
import { TextInput } from "@/components/Forms/TextInput"
import { ModalTransition } from "@/components/animation_utils/ModalTransition"
import { Form, Formik } from "formik"
import XmarkIcon from "public/icons/x_mark.svg"
import { db } from "@/services/dexie/db"
interface Props {
    closeModal: (isSave?:boolean)=>void;
    type: string;
    editorValue: string
}
export const SaveModal = (
    {
closeModal,
editorValue,
type
    }:Props
)=>{
    return(
        <ModalTransition>
        <div className="flex flex-col bg-white sm:border sm:border-secondary w-full sm:max-w-lg h-[80%] sm:h-fit py-6 mt-auto sm:mt-0 rounded-t-2xl sm:rounded-2xl shadow-sm relative z-[210]">
<div className="w-full px-6">
<button
  onClick={()=>closeModal()}
  className="w-8 h-8 rounded-xl flex items-center justify-center ml-auto bg-secondary/20 border-half border-secondary lg:hover:bg-secondary/40"
>
  <XmarkIcon className="fill-black/80 w-4 h-4" />
</button>
<h4 className="text-xl text-dark font-medium">Save Note</h4>
<div className="w-full flex flex-col gap-6 pt-6">
<Formik
initialValues={{
    title: ""
}}
onSubmit={async(values)=>{
try {
    await db.notes.add({
        title: values.title,
        type,
        content: editorValue
    });
    closeModal(true)
} catch (error) {
    return;
}
}}
>
{
    ({dirty})=>{
        return(
            <Form className="flex flex-col gap-6">
            <div className="w-full">
            <TextInput 
                name="title"
                labelText="Title"
                placeholder="Enter note title"
                isError={false}
                maxLength={50}
                required
        
                />
            </div>
                <PrimaryButton
                disabled={!dirty}
                className="w-full"
                text="Save"
                />
            </Form>
        )
    }
}
</Formik>
  </div>
  </div>
</div>
</ModalTransition>
    )
}