
import { MovieCard } from "./MovieCard"

interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    // Add any other properties you need for the Movie type here
}

interface MovieListProps {
    title: string;
    movies: Movie[] | null; // movies can be an array of Movie or null
}

export const MovieList:React.FC<MovieListProps> = ({title, movies}) => {
    console.log(movies);
    // const poster = movies[0].poster_path;
    // console.log(poster);
    
  
  return (
    <div>
        <div className="text-xl text-white font-semibold">
            {title}
        </div>
       <div className="flex overflow-x-auto">
       <div className="flex">
            {/* Map over movies to render a MovieCard for each movie */}
            {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            posterPath={movie.poster_path} 
                        />
                    ))
                ) : (
                    <p>No movies available</p>
                )}
        </div>
       </div>
    </div>
  )
}
 