import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [Coffee,setCoffee]=useState([]);
    const url='https://coffee-api-nu.vercel.app/';
    useEffect(()=>{
        const fetchProduct=async()=>{
            const response=await fetch(url);
            const product=await response.json();
            setCoffee(product[0].data);     
        }
        fetchProduct()
    },[])
    return (
        <ProductContext.Provider value={{Coffee}}>
            {children}
        </ProductContext.Provider>
    );
}