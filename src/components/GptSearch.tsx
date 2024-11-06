import { GptMovieRecommendation } from "./GptMovieRecommendation"
import { GptSearchBar } from "./GptSearchBar"


export const GptSearch = () => {
  return (
    <div>
        <GptSearchBar/>
        <GptMovieRecommendation/>
    </div>
  )
}
