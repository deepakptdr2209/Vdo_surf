import { useEffect } from "react";
import { useAppDispatch } from "../Hooks";
import { API_OPTIONS } from "../utils/Constants";
import { addTrending } from "../utils/MovieSlice";


const useTrendingMovie = ()=>{
    const dispatch = useAppDispatch();
  const gettrendingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day',
       API_OPTIONS);
       const json = await data.json();
       dispatch(addTrending(json.results))
       
  }
  useEffect(()=>{
 gettrendingMovies();
},[])
}

export default useTrendingMovie;