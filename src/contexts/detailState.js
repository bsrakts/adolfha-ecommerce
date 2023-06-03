import axios from "axios";
import { createContext, useState} from "react";

export const DetailState = createContext();

export const DetailProvider = (props) => {

  const [detail, setDetail] = useState({})

  const fetchProductsDetail = async (id) => {
    try {
     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setDetail(response.data)
    } catch (error) {
      console.log("error: product data")
    }
  }

  const product = { fetchProductsDetail, detail}
  
  return (
    <DetailState.Provider value={product}>
    {props.children}
  </DetailState.Provider>
  )
}