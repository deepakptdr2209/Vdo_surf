import useNowPlaying from "../hooks/useNowPlaying";
import usePopulerMovie from "../hooks/usePopuler";
import useTopRatedMovie from "../hooks/useToprated";
import useTrendingMovie from "../hooks/useTrending";
import useUpcomingMovies from "../hooks/useUpcoming";
import { GptSearch } from "./GptSearch";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

 const Browse = () => {
  
  useNowPlaying();
  usePopulerMovie();
  useTrendingMovie();
  useTopRatedMovie();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {/* Wrapper div for relative and absolute positioning */}
      <GptSearch/>
      <div className="bg-stone-800">
        <div >
        <MainContainer />
        </div>
        <div >
        <SecondaryContainer  />
        </div>
       
      </div>
    </div>
  )
}
export default Browse;