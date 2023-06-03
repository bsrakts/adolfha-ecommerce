/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Badge, Button, Card, CardContent, Rating, Typography } from '@mui/material'
import './style.css'
import CurrencyFormat from 'react-currency-format';

const ProductCard = ({ productData }) => {

  return (
    <div className='cardContainer'>
      <Card sx={{ width: 300, height: 350 }}>
        <CardContent className='listCard'>
          <Badge className='badge' color='secondary'>
            {productData.category}
          </Badge>
          <div className='productImage'>
            <img src={productData.image} />
          </div>
          <div className='cardBottom'>
            <div className='rateingStars'>
              <Typography className='countText'>
                ({productData.rating.count})
              </Typography>
              <Rating
              name="size-small"
              size="small"
                value={productData.rating.rate}
                max={5} />
               
            </div>
            <div className='cardInfo'>
              <Typography className="listProductTitle" gutterBottom fontSize={12} component="div">
              {productData.title}
            </Typography>
            <Typography variant='body2' color={Text.secondary}>
              <div className="listProductPrice">
                {<CurrencyFormat
                  value={productData.price}
                  displayType='text'
                  thousandSeparator={true}
                  prefix={'£'}
                />}
              </div>
            </Typography>
            </div>
            <Button className='basketButton'>Add To Basket</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard