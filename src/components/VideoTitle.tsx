import { VideoProps } from "./MainContainer"



export const VideoTitle:React.FC<VideoProps> = ({original_title,overview}) => {
  return (
    <div>
        <div className="px-12 pt-40 absolute bg-gradient-to-b from bg-black to bg-transparent">
           <h1 className="text-5xl font-bold text-white p-1 m-1">{original_title}</h1>
           <p className="text-xl w-1/4 px-4 text-gray-200 py-2 m-2">{overview}</p>
           <div className="flex p-2 m-2">
           <button className="p-2 px-8 mx-4 m-2 rounded-md bg-slate-200 ">▶Play</button> 
           <button className="p-2 px-6 mx-4 m-2 rounded-md bg-gray-500 " >More info</button>
          
           </div>
        </div>
    </div>
  )
}
