import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';
import group from '../../../assets/Group.png';
import vector from '../../../assets/Vector.png';
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Product from './Product/Product';

function Header() {
  return (
    <header>
      <NavLink className='logo' to='/'>
        <img src={logo} alt='' />
      </NavLink>

      <div className='options'>
        <ul>
          <a>
            <NavLink
              activeClassName='link__opt-active'
              className='link__opt'
              to='/product'
            >
              Furniture
            </NavLink>
          </a>

          <a>Lighting</a>
          <a>Decor</a>
          <a>Tablewear</a>
          <div className='icons'>
            <NavLink
              activeClassName='link__basket-active'
              className='link__basket'
              to='/basket'
            >
              <img src={group} alt='' />
            </NavLink>
            <img src={vector} alt='' />
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
