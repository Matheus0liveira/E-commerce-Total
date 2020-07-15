import React from 'react';
import './style.css'


function Card({ image, title, description, price, count, clickDecrement, clickIncrement, styles }) {


  return (

    <div className='card' >

      <div className="image">
        <div className="count"> <p>{count}</p></div>
        <img src={(`${image}`)} alt={title} />
      </div>
      <div className="title-description">
        <h2>{title}</h2>
        <div style={{ width: '100%', height: '1px', background: '#ccc' }}></div>

        <p>{description}</p>
      </div>
      <div className="buttons-value">

        <h5>R$:{price}</h5>
        <div className="buttons">

          <button style={{ opacity: styles.opacity, cursor: styles.cursor }} className='decrement' onClick={clickDecrement}> - </button>
          <button className='increment' onClick={clickIncrement}> + </button>

        </div>
      </div>

    </div >
  );
}

export default Card;