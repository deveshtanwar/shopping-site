import React from 'react'
import './header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const {totalCount} = useSelector((state) => state.cart);
  return (
    <div className='header container-fluid p-3 bg-primary'>
      <div className='nav mx-2'>
          <div className='brand'>
            <Link to="/" className='brand-name text-white'>Collections <span className='e'>E</span> Shop</Link>
            <i className="bi bi-tablet"></i>
          </div>
            <Link to="/cart" className='cart-link'>
              <div className='cart'>
                <i className="bi bi-bag"></i>
                <div className='cart-redux'>{totalCount}</div>
                <div>Bag</div>
              </div>
            </Link>
      </div>
    </div>
  )
}

export default Header