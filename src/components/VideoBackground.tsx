import {  useAppSelector } from "../Hooks";
import {useTrailerVideo} from "../hooks/useTrailerVideo";

export const VideoBackground = ({movieId}) => {
    // const [trailer,setTrailer] = useState(null)
    
    const trailerVideo = useAppSelector(store => store.movies?.trailerVideo)
     useTrailerVideo(movieId)
  return (
    <div className="w-screen">
        
        <iframe 
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}
             ?autoplay=1&mute=1&controls=0&
             rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
    </div>
  )
}