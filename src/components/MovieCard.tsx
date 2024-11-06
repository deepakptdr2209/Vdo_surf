import { CDN_IMG_URL } from "../utils/Constants"


export const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48">
       <img src={CDN_IMG_URL + posterPath} alt="movies-poster" />
    </div>
  )
}
