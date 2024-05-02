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

// [ ----- Using async await ------]

// import { useEffect, useState } from "react";

// function useConverter(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const api = `https://open.er-api.com/v6/latest/${currency}`;
//                 const response = await fetch(api);
//                 const result = await response.json();
//                 setData(result['rates'] || {});
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, [currency]);

//     return data;
// }

// export default useConverter;