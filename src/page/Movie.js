import { useParams } from "react-router-dom"

export default function Movie() {
    const value = useParams();
    console.log(value);
  return (
    <h1>Movie</h1>
  )
}
