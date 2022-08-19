import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false);
  const [shades,setShades]= useState('')
  const [list,setList] = useState(new Values('#f15025').all(shades));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(parseInt(shades));
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true)
    }
    
  }
  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='number'
        value={shades}
        onChange={(e)=> setShades(e.target.value)}
        placeholder='% difference'
        min='1'
        max='40'
        className='num-input'
       />
        <input type="text" 
        value={color} 
        onChange={(e)=>setColor(e.target.value)}
        placeholder='#f15025'
        className={`${error ? 'error' : null}`}/>
        <button className="btn" type='submit'>Submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        return<SingleColor key={index} {...color} index={index} list={list}/>
      })}
    </section>
    </>
    )
}

export default App
