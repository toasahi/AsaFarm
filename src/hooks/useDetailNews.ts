import { useState } from "react"

type Detail = {
    id : number;
    description : String;
    imageUrl : String;
}

export const useDetailNews = (()=>{
    const [loading,setLoading] = useState(false);
    const [detail,setDetail] = useState<Array<Detail>>([]);
    
})