import { useEffect } from "react";
import { useAppDispatch } from "../Hooks";
import { API_OPTIONS } from "../utils/Constants";
import { addmovie } from "../utils/MovieSlice";


const useNowPlaying = ()=>{
    const dispatch = useAppDispatch();
  const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
       API_OPTIONS);
       const json = await data.json();
       dispatch(addmovie(json.results))
       
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlaying;