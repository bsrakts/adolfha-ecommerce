import React, { useContext, useEffect} from 'react'
import ProductDetail from '../components/productDetail'
import { useParams } from 'react-router-dom'
import { DetailState } from '../contexts/detail'

export const ProductDetailPage = () => {

  const { fetchProductsDetail, detail } = useContext(DetailState)

   const { id } = useParams();

  useEffect(() => {
    fetchProductsDetail(id)
  },[id])


  return (
    <div>
      {console.log(detail)}
      <ProductDetail
        product={detail} />
    </div>
  )
}