/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Badge, Card, CardContent, Rating, Typography } from '@mui/material'
import './style.css'
import { CircleRounded } from '@mui/icons-material'
import AddToBasket from '../button'

const ProductDetail = ({ product }) => {


  return (
    <div className='productDetailContainer'>
      <Card className="productDetailCard">
        <CardContent className='detailCard'>
            <Badge className='badge' color='secondary'>
            {product.category}
          </Badge>
          <div className='productDetailImage'>
            <img src={product.image} />
          </div>
          <div className='detailCardInfo'>
           <Typography className="detailProductTitle" gutterBottom fontSize={12} component="div">
           <CircleRounded/> {product.title}
            </Typography>
            <Typography className="detailProductDescription" fontSize={12} component="div">
           {product.description}
            </Typography>
          <Typography variant='body2' fontSize={18}>
              <div className="detailProductPrice">
                £ {product.price}
              </div>
            </Typography>
            <AddToBasket item={product}/>
          </div>
        </CardContent>
     </Card>
    </div>
  )
}

export default ProductDetail