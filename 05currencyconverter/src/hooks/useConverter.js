import { useEffect, useState } from "react";

function useConverter(currency){
    const [data,setData] = useState(0);
    useEffect(()=>{
        const api = `https://open.er-api.com/v6/latest/${currency}`;
        fetch(
            api
        ).then((res)=> res.json())
        .then((res)=>{
            setData(res['rates'])
        })
    },[currency])
    return data

}

export default useConverter;