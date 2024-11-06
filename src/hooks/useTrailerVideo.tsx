import { useEffect } from "react";
import { useAppDispatch } from "../Hooks";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailer } from "../utils/MovieSlice";


export const useTrailerVideo = (movieId) => {
    const dispatch = useAppDispatch();
       // fetch trailer video for background
       const getTrailerVideo = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId
                                +'/videos?language=en-US',
                                API_OPTIONS)
        const json = await data.json(); 
     //   console.log(json);
       const filterTrailerData = json.results.filter((video)=>video.type ==="Trailer");
       const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];
      // console.log(trailer);
      // setTrailer(trailer.key);
      dispatch(addTrailer(trailer))
       
                               

    }
    useEffect(()=>{
        getTrailerVideo();
    },[])
}
