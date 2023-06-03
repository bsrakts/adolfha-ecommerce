/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from 'react'
import { GlobalState } from '../../contexts/globalState';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import './style.css'
import ProductCard from '../productCard';
import { Link } from 'react-router-dom';
import { CategoryState } from '../../contexts/category';


const ProductList = ({ product }) => {

  const { categoryName } = useContext(CategoryState)

  return (
    <div className='productList'>
      <div className='productCategory'>
        <Typography>Category</Typography>
        <FormControl fullWidth className='productCategoryForm'>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
          </InputLabel>
          <Select
            defaultValue={'all'}
            className='productCategoryInput'
          >
            <Link to={`/`} value={'all'}>
            <MenuItem className='menuItemText'>
                All
              </MenuItem>
              </Link>
            {categoryName.map((cName) => {
              return (
                <MenuItem className='menuItemText'
                  value={cName}>
                <Link to={`/category/${cName}`}>
                  {cName}
                </Link>
              </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <Grid2 className="productListGrid" container columns={{ xs: 4, sm: 8, md: 12 }}>
          {product.map((item) => {
            return (
              <Link to={`/product/${item.id}`}>
                <Grid item xs={2} sm={4} md={4}>
                  <ProductCard
                    key={item.id}
                    productData={item} />
                </Grid>
              </Link>
            );
          })}
        </Grid2>
      </div>
    </div>
  )
}

export default ProductList