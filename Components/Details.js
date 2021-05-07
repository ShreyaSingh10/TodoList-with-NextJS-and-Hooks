import { useRouter } from "next/router";

export default function Details(){
    const router = useRouter()
    const {
        query: { name },
    } = router
    
  return (
        <div>
            <h2>Welcome to the details page</h2>
            <p>{name}</p>
        </div>
    )
}  
