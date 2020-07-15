import React, { useState, createContext, useContext } from 'react';

const listItemsContext = createContext()

const listItems = [
  {
    id: 1,
    image: 'http://lorempixel.com/400/201/technics/',
    title: 'Notebook',
    price: 3000,
    description: 'Notebook brabo, o mais brabo de todos, o bixo é brabo!',
    count: 0,
    inCart: false
  },
  {
    id: 2,
    image: 'http://lorempixel.com/400/202/technics/',
    title: 'Computador',
    price: 6000,
    description: 'Computador brabo, o mais brabo de todos, o bixo é brabo!',
    count: 0,
    inCart: false
  },
  {
    id: 3,
    image: 'http://lorempixel.com/400/203/technics/',
    title: 'Celular',
    price: 2500,
    description: 'Celular brabo, o mais brabo de todos, o bixo é brabo!',
    count: 0,
    inCart: false
  },
  {
    id: 4,
    image: 'http://lorempixel.com/400/204/technics/',
    title: 'Ipad',
    price: 4500,
    description: 'Ipad brabo, o mais brabo de todos, o bixo é brabo!',
    count: 0,
    inCart: false
  },
  {
    id: 5,
    image: 'http://lorempixel.com/400/205/technics/',
    title: 'Sambug',
    price: 1800,
    description: 'Sambug brabo, o mais brabo de todos, o bixo é brabo!',
    count: 0,
    inCart: false
  },
]

export default function ListItemsProvider({ children }) {

  const [items, setItems] = useState(listItems)
  const [totalPrice, setTotalPrice] = useState(0)
  return (

    <listItemsContext.Provider value={{ items, setItems, totalPrice, setTotalPrice }}>

      {children}

    </listItemsContext.Provider>
  );
}
export function useListItems() {

  const context = useContext(listItemsContext)
  if (!context) throw new Error('useData must be used within a ListItemsProvider')

  const { items, setItems, totalPrice, setTotalPrice } = context

  return { items, setItems, totalPrice, setTotalPrice }
}

