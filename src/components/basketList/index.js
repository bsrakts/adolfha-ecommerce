import { List, ListItem } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { BasketContext } from '../../contexts/basketState'
import BasketCard from '../basketCard'

const BasketList = () => {

  const { basketProduct } = useContext(BasketContext)
  
  const uniqueItems = {};

  
    basketProduct.forEach((basketItem) => {
      const { id } = basketItem;
      if (uniqueItems[id]) {
        uniqueItems[id].count++
      } else {
        uniqueItems[id] = {
          item: basketItem,
          count: 1,
        }
      }
    });


  return (
    <div className='basketList'>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {Object.values(uniqueItems).map(({item, count}) => (
          <ListItem
            key={item}
            disableGutters
            className='basketListItem'
          >
            <BasketCard
              basketItem={item}
              basketProductCount={count} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default BasketList