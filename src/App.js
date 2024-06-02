import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [height,setHeight] = useState(140); 
  const [weight,setWeight] = useState(40); 

  const onWeightChange = (event)=>{
    setWeight(event.target.value);
  }
  
  const onHeightChange = (event)=>{
    setHeight(event.target.value);

  }

  const output = useMemo(()=>{
    const calculateHeight = height/100;

    return (weight/(calculateHeight*calculateHeight)).toFixed(1)

  },[height,weight])
  
  return (
    <div className='main'>
      <h1>Project: BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight}kg</p>
        <input className='input-slider' value={weight} type='range' step='1' min='40' max ='200' onChange={onWeightChange} />
        
        <p className='slider-output'>Height: {height}cm</p>
        <input className='input-slider' value={height} type='range' step='1' min='140' max ='220' onChange={onHeightChange} />

        <div className='output-section'>
          <p>Your BMI is</p>
          <p className='output'>{output} kg/m<sup>2</sup></p>
        </div>
      </div>
    </div>
  )
}

export default App
