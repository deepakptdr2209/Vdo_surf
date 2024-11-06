import { useEffect } from "react";
import { useAppDispatch } from "../Hooks";
import { API_OPTIONS } from "../utils/Constants";
import {  addTopRated } from "../utils/MovieSlice";


const useTopRatedMovie = ()=>{
    const dispatch = useAppDispatch();
  const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
       API_OPTIONS);
       const json = await data.json();
       dispatch(addTopRated(json.results))
       
  }
  useEffect(()=>{
    getTopRatedMovies();
  },[])
}

export default useTopRatedMovie;