import React, { useContext } from "react";
import ProductList from "../components/productList";
import { GlobalState } from "../contexts/globalState";

export const Home = () => {
   
  const productsData = useContext(GlobalState)

  return (
      <div className="home-container">
      <ProductList product={productsData} />
      </div>
  );
}
