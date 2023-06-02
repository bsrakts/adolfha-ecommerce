/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import { GlobalState } from '../../contexts/globalState';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Grid} from '@mui/material';
import './style.css'
import ProductCard from '../productCard';


const ProductList = () => {

  const productsData = useContext(GlobalState)

  return (
    <div className='productList'>
      <Grid2 className="productListGrid" container columns={{ xs: 4, sm: 8, md: 12 }}>
        {productsData.map((productData) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <ProductCard productData={productData} />
            </Grid>
          );
        })}
      </Grid2>
    </div>
  )
}

export default ProductList