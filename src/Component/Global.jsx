import { createContext } from "react";
import React, { useEffect , useState } from 'react'
import axios from 'axios'


export const ShopApi = createContext();

export default function ShopProviderContext(props){
  const [shops, setShop] = useState([]);

  async function getProducts(cate , callback) {
    let {data} = await axios.get(`https://api.escuelajs.co/api/v1/${cate}`);
    callback(data.slice(0,23))
  }

  useEffect(()=>{
    getProducts('products' , setShop);
  },[]);

  return <ShopApi.Provider value={{shops}}>
    {props.children}
  </ShopApi.Provider>

}