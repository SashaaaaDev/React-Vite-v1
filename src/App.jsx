import Button from './components/Button'
import Input from './components/Input'
import './App.css'
import React, { useState } from 'react';

function App() {
  const counter = () => {
    console.log('Clicked!')
  }
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="App">
      <Button text="Counter is " initialText={0} onClick={counter} />
      <Input placeholderText="Text..." onChange={handleInputChange} />
      <p>Input value: {inputValue}</p>
    </div>
  )
}
export default App
