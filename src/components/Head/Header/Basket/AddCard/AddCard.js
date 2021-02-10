import React from 'react';
import './AddCard.css';
import creditcardlogo from '../../../../../assets/creditcardlogo.png';
import linefirst from '../../../../../assets/linefirst.png';
import linesecond from '../../../../../assets/linesecond.png';
import linethird from '../../../../../assets/linethird.png';
import linefourth from '../../../../../assets/linefourth.png';

function AddCard() {
  return (
    <div className='addCard'>
      <div className='creditCard'>
        <div className='creditCard__logo'>
          <img src={creditcardlogo} alt='creditlogo' />
          <div className='lines-one'>
            <img className='linefirst' src={linefirst} alt='linefirst' />
            <img className='linesecond' src={linesecond} alt='linesecond' />
          </div>
          <div className='card__info'>
            <p>Card Number</p>
            <input placeholder='0123-4567-8901-2345' type='text' />
          </div>
          <div className='card__line'>
            <p></p>
          </div>
          <div className='card__info'>
            <p>Name</p>
            <input placeholder='Tom Thompson' type='text' />
          </div>
          <div className='card__line'>
            <p></p>
          </div>

          <div className='card__info-shorts'>
            <div className='card__info-short'>
              <div className='card__info-short-input'>
                <p>Exp.date</p>
                <input placeholder='12/21' type='text' />
              </div>
              <div className='card__line-short'>
                <p></p>
              </div>
            </div>
            <div className='card__info-short'>
              <div className='card__info-short-input'>
                <p>CVC</p>
                <input placeholder='1234' type='text' />
              </div>
              <div className='card__line-short'>
                <p></p>
              </div>
            </div>
          </div>
          <div className='lines-two'>
            <img className='linethird' src={linethird} alt='linethird' />
            <img className='linefourth' src={linefourth} alt='linefourth' />
          </div>
        </div>
      </div>
      <div className='creditcard__accept'>
        <h5 className='card-basket__desc'>Sofa Francesca</h5>
        <h1 className='card-basket__price'>300$</h1>
        <button>Accapt</button>
      </div>
    </div>
  );
}

export default AddCard;
