import React, { createContext, useEffect, useState } from 'react';

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [basketProductCount, setBasketProductCount] = useState(0);
  const [basketItemCount, setBasketItemCount] = useState(1);

  useEffect(() => {
    const storedItems = localStorage.getItem('basketProduct');
    const storedItemsCount = localStorage.getItem('basketProductCount');

    if (storedItems) {
      setBasketProduct(JSON.parse(storedItems));
    }

    if (storedItemsCount) {
      setBasketProductCount(Number(storedItemsCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basketProduct', JSON.stringify(basketProduct));
  }, [basketProduct]);

  useEffect(() => {
    localStorage.setItem('basketProductCount', basketProductCount.toString());
  }, [basketProductCount]);

  const addToBasket = (item) => {
    setBasketProduct((prevItems) => [...prevItems, item]);
    setBasketProductCount((prevCount) => prevCount + 1);
  };

 const removeToBasket = (basketItem) => {
   const itemIndex = basketProduct.findIndex((item) => item.id === basketItem.id);

    if (itemIndex !== -1) {
      const updatedBasket = [...basketProduct];
      updatedBasket.splice(itemIndex, 1);
      setBasketProduct(updatedBasket);
      setBasketProductCount((prevCount) => prevCount - 1);
    }
  };


  const clearBasket = () => {
    setBasketProduct([]);
    setBasketProductCount(0);
  };

  return (
    <BasketContext.Provider
      value={{ basketProduct, basketProductCount, addToBasket, removeToBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketProvider };
