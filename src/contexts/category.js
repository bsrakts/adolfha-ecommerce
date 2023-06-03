import axios from "axios";
import { createContext, useEffect, useState} from "react";

export const CategoryState = createContext();

export const CategoryProvider = (props) => {

  const [categoryName, setCategoryName] = useState([])
  const [categoryProduct, setCategoryProduct] = useState([])

  const fetchCategory = async () => {
    try {
     const response = await axios.get(`https://fakestoreapi.com/products/categories`);
      setCategoryName(response.data)
      console.log(response, "name")
    } catch (error) {
      console.log("error: product data")
    }
  }

  useEffect(() => {
    fetchCategory()
  },[])

  const fetchProductsCategory = async (text) => {
    try {
     const response = await axios.get(`https://fakestoreapi.com/products/category/${text}`);
      setCategoryProduct(response.data)
      console.log(response)
    } catch (error) {
      console.log("error: product data")
    }
  }

  const productCategory = { fetchProductsCategory, categoryProduct, categoryName}
  
  return (
    <CategoryState.Provider value={productCategory}>
    {props.children}
  </CategoryState.Provider>
  )
}