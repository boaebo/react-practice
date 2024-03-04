'use client'

import React, { useState } from 'react'

const List = () => {

  let product = ['Tomatoes', 'Pasta', 'Coconut']

  const [add, setAdd] = useState(0);

  const handleAdd = () => {
  setAdd(add+1)
  }

  const handleMinus = () => {
    setAdd(add-1)
  }

  let title = product.map((a, i) => {
    return (
      
      <div className='food'key={i}>
         <img className='food-img' src={`/food${i}.png`} />
        <h4>{product[i]}  $40</h4>
        <span>주문 수량 : {add} </span>
        <button onClick={handleAdd}> +</button>
        <button onClick={handleMinus}> -</button>
      
      </div>
    )
  })


  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>상품 목록</h2>
      <div>{title}</div>
    </div>
  )
}

export default List