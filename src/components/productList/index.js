/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Grid } from '@mui/material';
import './style.css'


const ProductList = () => {
  return (
    <div className='productList'>
      <Grid2 container>
        <Grid xs={6}>
          <img src='https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o' width={300}/>
        </Grid>
        <Grid xs={6}>
          <img src='https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o' width={300}/>
        </Grid>
        <Grid xs={6}>
          <img src='https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o' width={300}/>
        </Grid>
      </Grid2>
    </div>
  )
}

export default ProductList