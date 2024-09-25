import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  // height: '450px',
  color: '#fff',
  lineHeight: '260px',
  textAlign: 'center',
  background: '#364d79',
};

const TopCorusel: React.FC = () => (
  <div className="max-h-[450px]">
    <Carousel arrows autoplay>
      <div className='max-h-[450px]'>
        <h3 style={contentStyle}><img src="https://img2.akspic.ru/attachments/crops/4/9/2/3/13294/13294-liniya_gorizonta-gorod-risovanie-gorizont-gorodskoj_pejzazh-3840x2160.jpg" alt="" /></h3>
      </div>
      <div className='max-h-[450px]'>
        <h3 style={contentStyle}><img src="https://img2.akspic.ru/attachments/crops/4/9/2/3/13294/13294-liniya_gorizonta-gorod-risovanie-gorizont-gorodskoj_pejzazh-3840x2160.jpg" alt="" /></h3>
      </div>
      <div className='max-h-[450px]'>
        <h3 style={contentStyle}><img src="https://img2.akspic.ru/attachments/crops/4/9/2/3/13294/13294-liniya_gorizonta-gorod-risovanie-gorizont-gorodskoj_pejzazh-3840x2160.jpg" alt="" /></h3>
      </div>
      <div className='max-h-[450px]'>
        <h3 style={contentStyle}><img src="https://img2.akspic.ru/attachments/crops/4/9/2/3/13294/13294-liniya_gorizonta-gorod-risovanie-gorizont-gorodskoj_pejzazh-3840x2160.jpg" alt="" /></h3>
      </div>
    </Carousel>
  </div>
);

export default TopCorusel;