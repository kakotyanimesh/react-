// custom hooks : most important

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))           // res[currency] => holds the property of the data that we get after calling the API
        // console.log(data);

    }, [currency])
    // console.log(data);
    return data
    
}


export default useCurrencyInfo;