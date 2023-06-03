/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Badge, Card, CardContent, Typography } from '@mui/material'

const ProductDetail = ({ product }) => {


  return (
    <div className='productDetailContainer'>
      <Card sx={{ width: 300, height:300 }}>
        <CardContent className='listCard'>
            <Badge className='badge' color='secondary'>
            {product.category}
          </Badge>
          <div className='productImage'>
            <img src={product.image} />
          </div>
          <div className='cardInfo'>
           <Typography className="listProductTitle" gutterBottom fontSize={12} component="div">
           {product.title}
          </Typography>
          <Typography variant='body2' color={Text.secondary}>
              <div className="listProductPrice">
                ${product.price}
              </div>
            </Typography>
          </div>
        </CardContent>
     </Card>
    </div>
  )
}

export default ProductDetail