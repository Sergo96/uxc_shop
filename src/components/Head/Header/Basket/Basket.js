import React from 'react';
import './Basket.css';
import sofa1 from '../../../../assets/sofa1.png';
import sofa2 from '../../../../assets/sofa2.png';
import { Link } from 'react-router-dom';

function Basket() {
  return (
    <div className='basket'>
      <div className='basket__cards'>
        <div className='basket__card'>
          <img src={sofa1} alt='sofa1' />
          <div className='basket__card-wrapp'>
            <h5 className='basket__desc'>Sofa Francesca</h5>
            <h1 className='basket__price'>300$</h1>
            <Link to='/added_to_card'>
              <button> Buy Now</button>
            </Link>
          </div>
        </div>
        <div className='basket__card'>
          <img src={sofa2} alt='sofa2' />
          <div className='basket__card-wrapp'>
            <h5 className='basket__desc'>Sofa Francesca</h5>
            <h1 className='basket__price'>300$</h1>
            <Link to='/added_to_card'>
              <button> Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
