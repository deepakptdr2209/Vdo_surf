import { useAppSelector } from "../Hooks"
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle";
 export interface VideoProps{
   
    overview : string;
    original_title: string
   
 }

export const MainContainer = () => {
    const movie = useAppSelector(store=>store.movies?.nowPlaying) as VideoProps[] | undefined | null;
    if(!movie)return null;
    const mainMovie = movie[1];
   // console.log(mainMovie);
    const {original_title  , overview , id: movieId} = mainMovie as VideoProps & {id : string} ;
   
  return (
    <div className="">
        
        <VideoTitle original_title= {original_title} overview = {overview} />
        <VideoBackground movieId={movieId}/>
    </div>
  )
}
