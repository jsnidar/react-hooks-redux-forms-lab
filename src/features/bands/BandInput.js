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

  console.log(name)
  return (
    <form onSubmit={handleBandSubmit}>
      <p>
        <label>Add band</label>
        <input type="text" value={name} onChange={handleChange} />
      </p>
      <input type="submit" />
    </form>
  );
}

export default BandInput;
