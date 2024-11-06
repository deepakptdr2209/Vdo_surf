import { useAppSelector } from "../Hooks"
import { MovieList } from "./MovieList"

export const SecondaryContainer = () => {
    const movies = useAppSelector(store=>store.movies)
    
  return (
    <div>
        <MovieList title ={"Now Playing"}  movies = {movies.nowPlaying} />
        <MovieList title ={"Populer"}  movies = {movies.populerMovie} />
        <MovieList title ={"Trending"}  movies = {movies.trendingMovie} />
        <MovieList title ={"Upcoming"}  movies = {movies.upComingMovie} />
        <MovieList title ={"Top-Rated"}  movies = {movies.topRatedMovie} />
    </div>
  )
}
