import { Link } from "react-router-dom"
import pageNot from "../assets/pageNot.jpg"
export const PageNotFound = () => {
  return (
   <div className="container" >  
    <img src= {pageNot} className="img-fluid" />  
    <p className="text-center"></p>
    <Link to="/" className="btn btn-danger" > Home Page</Link>
   </div>
  )
}

