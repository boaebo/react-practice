'use client'

export default function Cart() {

  let MyCart = ['Tomatoes','Pasta']

  return (
    <div>
      <CartItem MyCart={MyCart}/>
      <Redbtn color='blue'/>
    </div>
  )
}

const CartItem = ({MyCart}) => {
  return (
    <div className="cart-item">
      <p>{MyCart[0]}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

const Redbtn = ({color}) => {
  return(
    <button style={{backgroundColor: color, width:'50px', color:'white'}}>버튼</button>
  )
}