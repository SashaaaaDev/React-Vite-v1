import React, { useState } from 'react'
import '../App.css'

const Input = ({placeholderText, onChange}) => {
  const [place] = useState(placeholderText);
  const handleChange = (event) => {
    onChange(event.target.value);
  }
  return (
    <input className="input" placeholder={place} onChange={handleChange}  />
  )
}

export default Input
