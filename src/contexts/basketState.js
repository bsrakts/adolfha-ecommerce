import React, { createContext, useEffect, useState } from 'react';

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [basketProductCount, setBasketProductCount] = useState(0);

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

  const removeToBasket = ({ basketItem, basketProductCount }) => {
    if (basketProductCount > 1) {
      setBasketProductCount((prevCount) => prevCount - 1)
    } else {
      setBasketProduct((prevItems) => prevItems.filter((prod) => prod.id !== basketItem.id));
    setBasketProductCount((prevCount) => prevCount - basketProductCount);
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
