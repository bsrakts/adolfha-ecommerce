import React, { useContext } from "react";
import ProductList from "../components/productList";
import { GlobalState } from "../contexts/globalState";

export const Home = () => {
   
  const productsData = useContext(GlobalState)

  return (
    <div className="home-container">
      <div className="weAreOpen">
        <img src="/assets/weareopen.png" alt="open"/>
      </div>
      <ProductList product={productsData} />
      </div>
  );
}
