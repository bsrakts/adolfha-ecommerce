import { Card, IconButton, List, ListItem, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/basketState'
import BasketCard from '../basketCard'
import { red } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import { amber } from 'material-ui-colors'
import { Delete, Devices, Diamond, Man, ShoppingBagSharp, Woman } from '@mui/icons-material'
import './style.css'

const {format} = require('number-currency-format')

const BasketList = () => {

  const { basketProduct, clearBasket } = useContext(BasketContext)

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

  const handleClearAllBasket = () => {
    clearBasket()
  }

  if (basketProduct.length !== 0) {
    return (
      <div className='noEmptyBasket'>
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
        <div className='costPrice'>
          <Card>
            <Typography fontSize={18} fontWeight={600} color={amber['A400']} borderBottom={1} borderColor={'black'} width={200} paddingY={2}>
              Order Summary
            </Typography>
            <List className='orderSummarylist'>
              {Object.values(uniqueItems).map(({ item, count }) => (
                <ListItem
                  key={item}
                  disableGutters
                  className='costPriceItem'
                >
                  <Typography className='orderSummaryText' fontSize={14}>
                    {item.category === "men's clothing" ? <Man />
                      : item.category === "women's clothing" ? <Woman />
                        : item.category === "electronics" ?
                          <Devices />
                          : <Diamond />
                    }
                    {item.title}
                  </Typography>
                  <Typography fontSize={14}>
                    {count} items = {format(count * item.price, {
                      currency: '£',
                      currencyPosition: 'LEFT',
                      spacing: false,
                    })}
                  </Typography>
                </ListItem>
              ))}
              <ListItem>
                <Typography className='totalPrice'>
                  <IconButton
                    className='deleteAllButton'
                    onClick={() => handleClearAllBasket()}>
                    <Delete fontSize='20' /> Delete All Basket
                  </IconButton>
                  <div>
                    <span className='totalPriceTitle'>Total Price: </span> £ {Object.values(uniqueItems).reduce((total, { item, count }) => total + (count * item.price), 0)}
                  </div>
                </Typography>
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    )
  } else {
    return (
      <div className='emptyBasket'>
        <Typography fontSize={18} color={red['A400']} border={1} borderColor={red['A400']} boxShadow={1} padding={5}>
          There isn't product in your basket!
        </Typography>
        <Link to={"/"}>
          <Typography backgroundColor={amber['A400']} boxShadow={1} padding={2} color={'black'} fontSize={18} marginTop={2}>
            <ShoppingBagSharp fontSize='20' />
            SHOPPING NOW
          </Typography>
        </Link>
      </div>
    )
  }
}

export default BasketList