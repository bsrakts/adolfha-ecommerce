import { Button, List, ListItem, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { BasketContext } from '../../contexts/basketState'
import BasketCard from '../basketCard'
import { red } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import { amber, yellow } from 'material-ui-colors'
import { ShoppingBagSharp } from '@mui/icons-material'

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

  if (basketProduct.length !== 0) {
    return (
      <div className='basketList'>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {Object.values(uniqueItems).map(({ item, count }) => (
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
  } else {
    return (
      <>
        <Typography fontSize={18} color={red['A400']} border={1} borderColor={red['A400']} boxShadow={1} padding={5}>
          There isn't product in your basket!
        </Typography>
        <Link to={"/"}>
          <Typography backgroundColor={amber['A400']} boxShadow={1} padding={2} color={'black'} fontSize={18} marginTop={2}>
            <ShoppingBagSharp fontSize='20'/>
            SHOPPING NOW
          </Typography>
        </Link>
      </>
    )
  }
}

export default BasketList