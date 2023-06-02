import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalState = createContext();

export const GlobalProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  

  const fetchProductsData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data)
      setDataLoading(false)
    } catch (error) {
      console.log("error: product data")
    }
  }

  useEffect(() => {
    fetchProductsData()
  }, []);

  return (
    <GlobalState.Provider>
    {props.children}
  </GlobalState.Provider>
  )
}