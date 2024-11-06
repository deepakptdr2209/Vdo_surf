import { useEffect } from "react";
import { useAppDispatch } from "../Hooks";
import { API_OPTIONS } from "../utils/Constants";
import {  addPopuler } from "../utils/MovieSlice";


const usePopulerMovie = ()=>{
    const dispatch = useAppDispatch();
  const getPopulerMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
       API_OPTIONS);
       const json = await data.json();
       dispatch(addPopuler(json.results))
       
  }
  useEffect(()=>{
    getPopulerMovies();
  },[])
}

export default usePopulerMovie;