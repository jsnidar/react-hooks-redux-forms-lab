import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {

  const bands = useSelector(state => state.bands.entities)
  const dispatch = useDispatch()

  const onBandSubmit = (name) => {
    dispatch(bandAdded(name))
  }

  const renderBands = bands.map((band, index) => <li key={index}>{band}</li>)

  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit} />
      <h4>Bands</h4>
      <ul>{renderBands}</ul>
    </div>
  );
}

export default BandsContainer;
