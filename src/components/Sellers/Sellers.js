import React from 'react';
import './Sellers.css';
import sofa1 from '../../assets/sofa1.png';
import sofa2 from '../../assets/sofa2.png';
import sofa3 from '../../assets/sofa3.png';
import sofa4 from '../../assets/sofa4.png';
import smgroup from '../../assets/smgroup.png';
import arrow from '../../assets/arrow.png';

function Sellers() {
  return (
    <div className='sellers'>
      <div className='highligh'>
        <h1>Best Sellers</h1>
      </div>
      <div className='cards'>
        <div className='card'>
          <img src={sofa1} alt='sofa1' />
          <div className='card__wrapp'>
            <h5 className='desc'>Sofa Francesca</h5>
            <h1 className='price'>300$</h1>
            <button>
              <img src={smgroup} alt='smgroup' />
              Add
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={sofa2} alt='sofa2' />
          <div className='card__wrapp'>
            <h5 className='desc'>Sofa Francesca</h5>
            <h1 className='price'>300$</h1>
            <button>
              <img src={smgroup} alt='smgroup' />
              Add
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={sofa3} alt='sofa3' />
          <div className='card__wrapp'>
            <h5 className='desc'>Sofa Francesca</h5>
            <h1 className='price'>300$</h1>
            <button>
              <img src={smgroup} alt='smgroup' />
              Add
            </button>
          </div>
        </div>
        <div className='card'>
          <img src={sofa4} alt='sofa4' />
          <div className='card__wrapp'>
            <h5 className='desc'>Sofa Francesca</h5>
            <h1 className='price'>300$</h1>
            <button>
              <img src={smgroup} alt='smgroup' /> Add
            </button>
          </div>
        </div>
      </div>
      <div className='see-more'>
        <h2>see more</h2>
        <img src={arrow} alt='' />
      </div>
    </div>
  );
}

export default Sellers;
