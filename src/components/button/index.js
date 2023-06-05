import { Button } from '@mui/material'
import React, { useContext } from 'react'
import './style.css'
import { BasketContext } from '../../contexts/basketState'

const AddToBasket = ({ item }) => {

  const {addToBasket} = useContext(BasketContext)

  const handleAddToBasket = (item) => {
    addToBasket(item)
  }
  
  return (
    <div>
      <Button className='basketButton' onClick={() => handleAddToBasket(item)}>Add To Basket</Button>
    </div>
  )
}

export default AddToBasket