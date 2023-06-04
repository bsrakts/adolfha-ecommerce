import React, { useContext } from 'react'
import { Badge, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import './style.css'
import { AddCircleOutlineSharp,RemoveCircleOutlineSharp } from '@mui/icons-material'
import { BasketContext } from '../../contexts/basketState'

const BasketCard = ({ basketItem, basketProductCount }) => {
  
  const { addToBasket, removeToBasket } = useContext(BasketContext);

  const handleRemoveToBasket = (basketItem) => {
    removeToBasket(basketItem)
  }

  return (
    <div>
      <Card className='basketCard'>
        <CardContent className='basketCardContent'>
          <Badge className='basketBadge'>{basketItem.category}</Badge>
          <div className='basketItemImage'>
            <CardMedia
            component="img"
            image={basketItem.image}
            alt={basketItem.title}>           
          </CardMedia>
          </div>
          <div className='basketItemInfo'>
            <Typography fontSize={20} fontWeight={600}>{basketItem.title}</Typography>
            <Typography fontSize={18} className='basketItemPrice'>£ {basketItem.price}</Typography>
            <div className='basketItemCount'>
              <IconButton onClick={() => handleRemoveToBasket({ basketItem, basketProductCount })}>
                <RemoveCircleOutlineSharp fontSize='16' />
              </IconButton>
              <Typography style={{ margin: "1.2rem" }}>{basketProductCount}
                </Typography>
              <AddCircleOutlineSharp fontSize='16'/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BasketCard