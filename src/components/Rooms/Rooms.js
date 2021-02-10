import React from 'react';
import './Rooms.css';
import arrow from '../../assets/arrow.png';
import living from '../../assets/living.png';
import bedroom from '../../assets/bedroom.png';
import kitchen from '../../assets/kitchen.png';
import bathroom from '../../assets/bathroom.png';

function Rooms() {
  return (
    <div className='rooms'>
      <div className='rooms__info'>
        <h1>High quality home decor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu
          sagittis feugiat nunc sit est vitae eget. Nisl at sed ultrices
          pharetra massa consectetur lobortis velit fames. Iaculis arcu rhoncus
          tellus porta ornare nunc libero. Accumsan nisi, ullamcorper non
          venenatis egestas convallis sed dignissim massa.
        </p>
      </div>
      <div className='rooms__info-img'>
        <div className='room__info-img1'>
          <div className='room__info-img'>
            <img className='room__info-img-thumb' src={living} alt='living' />
            <h1>Living Room</h1>
            <img className='arrow' src={arrow} alt='arrow' />
          </div>
          <div className='room__info-img'>
            <img className='room__info-img-thumb' src={kitchen} alt='kitchen' />
            <h1>Kitchen</h1>
            <img className='arrow' src={arrow} alt='arrow' />
          </div>
        </div>

        <div className='room__info-img2'>
          <div className='room__info-img'>
            <img className='room__info-img-thumb' src={bedroom} alt='bedroom' />
            <h1>Bedroom</h1>
            <img className='arrow' src={arrow} alt='arrow' />
          </div>
          <div className='room__info-img'>
            <img
              className='room__info-img-thumb'
              src={bathroom}
              alt='bathroom'
            />
            <h1>Bathroom</h1>
            <img className='arrow' src={arrow} alt='arrow' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
