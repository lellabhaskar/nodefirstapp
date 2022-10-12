import { useParams} from "react-router-dom"

export const Userdetails = ()=>{
    const params = useParams()
    const id = params.id
    return (
        <h1>In Userdetails {id}</h1>
        
    )
}