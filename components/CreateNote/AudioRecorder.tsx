import { useState, useRef, useEffect } from "react";
import PlayIcon from "public/icons/play.svg"
import PauseIcon from "public/icons/pause.svg"
import RecordIcon from "public/icons/record.svg"
import MicrophoneIcon from "public/icons/microphone.svg"
import DeleteIcon from "public/icons/trash_can.svg"
import dynamic from "next/dynamic";
import { WaveformGenerator } from "./WaveFormGenerator";
const ReactMediaRecorder = dynamic(()=>(
    import("react-media-recorder").then(mod => mod.ReactMediaRecorder)
));



interface Props {
    setValue: (value:string)=>void
}
export const AudioRecorder = (
    {
setValue
    }:Props
)=>{
    return(
<div className="w-full my-auto">
 
<ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl, pauseRecording, resumeRecording, previewAudioStream, clearBlobUrl  }) => {
useEffect(
    ()=>{
if(mediaBlobUrl){
    setValue(mediaBlobUrl)
}
    }, [mediaBlobUrl]
)
        return(
            <div className="w-full  flex flex-col items-center">
             {
                status === "idle"  ? (
                    <button
                    type="button"
                    onClick={startRecording}
                    className="w-[12.5rem] h-[12.5rem] flex items-center justify-center rounded-full bg-primary-light">
     <MicrophoneIcon className="w-[100px] h-[100px]"/> 
     </button>
                ) : (
            <div className="w-full">
                     <div className="flex items-center justify-center w-full h-[12.5rem] relative">
                        {
                            !mediaBlobUrl && status === "recording" ?
                             (  <WaveformGenerator mediaStream={previewAudioStream!}/> ) : 
                             !mediaBlobUrl && status === "paused" ?  
                             (
                                <div  className="flex w-full h-full bg-primary-light" />
                             ) :
                             (<audio src={mediaBlobUrl || undefined} controls/>)
                        }
                     
                       
                 </div>
    
              {
                !mediaBlobUrl && (
                    <div className="w-full flex justify-between mt-3 px-2 py-3 border border-[#085BA7]/10 rounded-lg">
                    <button 
                    onClick={
                        ()=>{
                            clearBlobUrl()
                        }
                    }
                    >
                    <DeleteIcon className="w-6 h-6"/>
                    </button>
                    
                    <button
                    onClick={()=>{
                        if(status === "paused"){
                            resumeRecording()
                        }
                        else{
                            pauseRecording()
                        }
                    }}
                    >
                        {
                            status === "recording" ? <PauseIcon className="w-6 h-6" /> : <RecordIcon className="w-6 h-6"/>
                        }
                    </button>
                    <button
                    onClick={stopRecording}
                    className="w-6 h-6 rounded bg-danger"
                    >
                    
                    </button>
                                 </div>
                )
              }
            </div>
                )
             }
            </div>
          )
      }}
    />
</div>
    )
}


































