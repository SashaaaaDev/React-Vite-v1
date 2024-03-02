import React, { useState } from 'react'
import '../App.css'
const Button = ({ text, initialText }) => {
  const [count, setCount] = useState(initialText);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className="button" onClick={handleClick}>{text} {count}</button>
  )
}

export default Button
