import React from 'react';

import FullCard from '../../Components/FullCard'
import { useListItems } from '../../Components/Context/ListItems'
import { FaSadTear } from 'react-icons/fa'


function Cart() {



  const { totalPrice } = useListItems()

  return (
    totalPrice > 0 ? <FullCard /> : (

      <>
        <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
          <FaSadTear />
          <p>Carrinho Vazio</p>
        </div>
      </>
    )
  )
}

export default Cart;