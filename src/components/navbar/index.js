/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext }  from 'react'
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon,LocalMall as LocalMallIcon } from '@mui/icons-material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import './style.css'
import {NavLink, useNavigate } from 'react-router-dom';
import { BasketContext } from '../../contexts/basketState';
import { amber } from '@mui/material/colors';

const Navbar = () => {

  const navigate = useNavigate();

  const { basketProductCount } = useContext(BasketContext)

  const logo = (
    <Typography color={amber['A400']} fontWeight={600} noWrap>
      ADOLFHA & CO .
    </Typography>
  )

  const menuItems = (
    <>
        <NavLink className="navTitle" to="/">
           All
        </NavLink>
        <NavLink className="navTitle" to="/category/men's clothing">
            Men
        </NavLink>
        <NavLink className="navTitle" to="/category/women's clothing">
          Women
        </NavLink>
        <NavLink className="navTitle" to="/category/electronics">
          Electronics
        </NavLink>
        <NavLink className="navTitle" to="/category/jewelery">
          Jewelry
        </NavLink>
        <NavLink className="navSepetIcon" to="/basket" variant='icon'>
        <LocalMallIcon />
        {basketProductCount > 0 && <span className='basketCount'>{basketProductCount}</span>}
        </NavLink>
    </>
  )

  return (
    <div>
      <AppBar position='sticky' className='appBar'>
        <Toolbar>
          {logo}
          <div style={{ marginLeft: 'auto' }}>
            <div className='menu'>
              {menuItems}
            </div>
            {/* mobileMenu */}
            <div className='mobileMenu'>
              <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant='' {...bindTrigger(popupState)}>
                    <MenuIcon />
                  </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={() => navigate('/')}>
                        All
                      </MenuItem>
                      <MenuItem onClick={() => navigate('/category/men\'s clothing')}>
                        Men
                      </MenuItem>
                    <MenuItem onClick={() => navigate('/category/women\'s clothing')}>Women</MenuItem>
                      <MenuItem onClick={() => navigate('/category/electronics')}>Electronics</MenuItem>
                      <MenuItem onClick={() => navigate('/category/jewelery')}>Jewelry</MenuItem>
                      <MenuItem onClick={() => navigate('/basket')} style={{"border-top" : "1px solid #18181c"}}><LocalMallIcon /> Basket</MenuItem> 
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar