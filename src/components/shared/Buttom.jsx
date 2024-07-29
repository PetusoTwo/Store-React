import React from 'react'

export const Buttom = ({text, bgColor, textColor, allProducts, setAllProducts}) => {

  const addToCart = () => {
    console.log("add to cart")
}
  return (
    <button 
    onClick={() => addToCart()}
    className={`${bgColor} ${textColor} p-2 rounded`}>
            {text}
        </button>
  )
}


