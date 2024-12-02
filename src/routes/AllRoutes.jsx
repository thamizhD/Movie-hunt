
import { Route,Routes } from "react-router-dom"
import {MovieList,MovieDetails,Search, PageNotFound} from "../pages"




  export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path = "/" element={<MovieList title = "Guide your top Movies" apiPath = "movie/now_playing"/>}/>
        <Route path = "movies/top" element={<MovieList title = "TopRated" apiPath = "movie/top_rated" />} />
        <Route path = "movies/popular" element={<MovieList title = "Popular" apiPath = "movie/popular"/>} />
        <Route path = "movies/upcoming" element={<MovieList title = "Upcoming " apiPath = "movie/upcoming"/>} />
        <Route path = "movie/:id" element={<MovieDetails/>} />
        <Route path = "search" element={<Search  apiPath = "search/movie" />} />
        <Route path = "*" element={<PageNotFound/>}  title="page Not Found"/>
        
      </Routes>
    </>
  )
}

