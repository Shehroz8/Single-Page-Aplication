import { useParams, useHistory, useLocation } from "react-router-dom"

export default function Movie() {
    const {id} = useParams();
    const {goBack} = useHistory();
    const {value} = useLocation();
    console.log(value); 
    
  return (
    <>
      <h1>Movie with id ${id}</h1>
      <button className="btn" onClick={goBack}>Go back</button>
    </>
  )
}
