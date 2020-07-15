import React from 'react';
import './style.css'
import Card from '../../Components/Card'
import { useListItems } from '../../Components/Context/ListItems'



function FullCart() {


  const { items, setItems, totalPrice, setTotalPrice } = useListItems()



  function handleIncrementButton(index) {

    const newList = items.slice()

    newList[index].count = newList[index].count + 1

    newList[index].count >= 1 ? newList[index].inCart = true : newList[index].inCart = false

    setTotalPrice(prevState => prevState + newList[index].price)

    setItems(newList)
  }


  function handleDecrementButton(event, index) {
    if (items[index].count <= 0) return

    const newList = items.slice()

    newList[index].count = newList[index].count - 1

    newList[index].count >= 1 ? newList[index].inCart = true : newList[index].inCart = false


    setTotalPrice(prevState => prevState - newList[index].price)

    setItems(newList)


  }

  return (
    <div className=' display-flex'>
      <div className="cards">

        {totalPrice > 0 ? ('') : ''}
        {items.map((item, index) => (
          item.inCart === true && (

            < Card

              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              count={item.count}
              clickDecrement={(event) => handleDecrementButton(event, index)}
              clickIncrement={() => handleIncrementButton(index)}
              styles={{ opacity: item.count === 0 ? '0.5' : '1', cursor: item.count === 0 ? 'not-allowed' : 'pointer' }}
            />


          )

        ))}


      </div>
      <div className='total-price'>
        <div className='price'>
          <h1>TOTAL: <span> R$ {totalPrice}</span></h1>
        </div>

      </div>
    </div>
  );
}

export default FullCart;