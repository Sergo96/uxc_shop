import React from 'react';
import './Product.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import line from '../../../../assets/line.png';
import sofa1 from '../../../../assets/sofa1.png';
import sofa2 from '../../../../assets/sofa2.png';
import sofa3 from '../../../../assets/sofa3.png';
import sofa4 from '../../../../assets/sofa4.png';
import smgroup from '../../../../assets/smgroup.png';

function Product() {
  return (
    <div>
      <div className='product__wrapp'>
        <div className='dropdowns'>
          <div className='dropdown'>
            <div className='dropdown__contain'>
              <button>Living Room</button>
              <ul>
                <li>
                  <a href=''>Sofas</a>
                </li>
                <li>
                  <a href=''>Tables</a>
                </li>
                <li>
                  <a href=''>Chairs</a>
                </li>
                <li>
                  <a href=''>Closets</a>
                </li>
              </ul>
              <ArrowDropDownIcon />
            </div>

            <img src={line} alt='' />
          </div>
          <div className='dropdown'>
            <div className='dropdown__contain'>
              <button>Bedroom</button>
              <ArrowDropDownIcon />
            </div>

            <img src={line} alt='' />
          </div>
          <div className='dropdown'>
            <div className='dropdown__contain'>
              <button>Kitchen</button>
              <ArrowDropDownIcon />
            </div>

            <img src={line} alt='' />
          </div>
          <div className='dropdown'>
            <div className='dropdown__contain'>
              <button>Outdoor</button>
              <ArrowDropDownIcon />
            </div>

            <img src={line} alt='' />
          </div>
          <div className='dropdown'>
            <div className='dropdown__contain'>
              <button>Office</button>
              <ArrowDropDownIcon />
            </div>

            <img src={line} alt='' />
          </div>
          <div className='dropdown'>
            <div className='dropdown__contain'>
              <button>Restaurants</button>
              <ArrowDropDownIcon />
            </div>

            <img src={line} alt='' />
          </div>
        </div>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Product;
