import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CategoryState } from '../contexts/category';
import ProductList from '../components/productList';

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