/* eslint-disable jsx-a11y/alt-text */
import { Badge, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './style.css'

const ProductCard = ({ productData }) => {

  return (
    <div className='cardContainer'>
      <Card sx={{ width: 300, height:300 }}>
        <CardContent className='listCard'>
            <Badge className='badge' color='secondary'>
            {productData.category}
          </Badge>
          <div className='productImage'>
            <img src={productData.image} />
          </div>
          <div className='cardInfo'>
           <Typography className="listProductTitle" gutterBottom fontSize={12} component="div">
           {productData.title}
          </Typography>
          <Typography variant='body2' color={Text.secondary}>
              <div className="listProductPrice">
                ${productData.price}
              </div>
            </Typography>
          </div>
        </CardContent>
     </Card>
    </div>
  )
}

export default ProductCard