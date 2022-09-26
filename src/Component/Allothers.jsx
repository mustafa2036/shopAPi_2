import { createContext } from "react";
import React, { useEffect , useState } from 'react'
import axios from 'axios'


export const AllContext = createContext();

export default function AllContextProvider(props){

    let [shops , setShops] = useState([]);

    async function getProducts(cate , callback) {
        let {data} = await axios.get(`https://api.escuelajs.co/api/v1/${cate}`);
        callback(data.slice(0,14))
    };

    useEffect(()=>{
        getProducts('products' , setShops);
      },[]);

    return <AllContext.Provider value={{shops}}>
        {props.children}
    </AllContext.Provider>
}