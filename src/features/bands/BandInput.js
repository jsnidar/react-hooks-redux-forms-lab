import React, { useState } from "react";

function BandInput({ onBandSubmit }) {

  const [ name, setName ] = useState('')
  
  const handleBandSubmit = (e) => {
    e.preventDefault()
    onBandSubmit(name)
    setName('')
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleBandSubmit}>
      <p>
        <label>
          Name
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleChange} 
          />
        </label>
      </p>
      <button type="submit">Add Band</button>
    </form>
  );
}

export default BandInput;
