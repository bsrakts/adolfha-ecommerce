import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalState = createContext();

export const GlobalProvider = ({ children }) => {

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
  }, [dataLoading]);

  console.log(products, "products")

  return (
    <GlobalState.Provider value={products}>
    {children}
  </GlobalState.Provider>
  )
}