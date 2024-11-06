
import { useEffect } from "react";
import { useAppDispatch } from "../Hooks";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcoming } from "../utils/MovieSlice";


const useUpcomingMovies = ()=>{
    const dispatch = useAppDispatch();
  const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
       API_OPTIONS);
       const json = await data.json();
       dispatch(addUpcoming(json.results))
       
  }
  useEffect(()=>{
    getUpcomingMovies();
  },[])
}

export default useUpcomingMovies;