import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these magnificient researchs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/quantum-cpu.jpeg'
              text='Quantam Computing'
              label='physics && Computer Science'
              path='/services'
             
            />
            <CardItem
              src='images/react.png'
              text='How to make Fullstack by using react'
              label='Web'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/numerical-analysis.jpeg'
              text='Numerical Analysis'
              label='Mathimatics'
              path='/services'
            />
            <CardItem
              src='images/magic square.png'
              text='Magic Square'
              label='Mathimatics'
              path='/products'
            />
            <CardItem
              src='images/ai.jpeg'
              text='introduction on Artificial Intelligent and How to use it '
              label='Computer Science'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
