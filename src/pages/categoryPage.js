import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProductList from '../components/productList';
import { CategoryState } from '../contexts/categoryState';

export const CategoryPage = () => {
  
  const { fetchProductsCategory, categoryProduct } = useContext(CategoryState)

  const { name } = useParams();
  
  useEffect(() => {
    fetchProductsCategory(name)
  },[name])


  return (
    <ProductList product={ categoryProduct }/>
  )
}