import React, { useState } from "react";

import "./SelectProperty.css";
import { FormControlLable } from "./UI/FormControlLable/FormControlLable";

export const SelectProperty = ({selected, setSelected}) => {

  const isButtonSelected = (value) => {
    if (selected === value) {
      return true;
    }
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    // onChange(e); // this fires the onChange handler (handleRadio) you passed in SearchItem
  };
  return (
    <div className="selectPropertyCard ">
      <span className="title">Select Property to be seen over time</span>
      <FormControlLable
        id={"altitude"}
        label={"Satellite Altitude"}
        onChange={handleChange}
        checked={isButtonSelected("altitude")}
      />
      <br />
      <FormControlLable
        id={"velocity"}
        label={"Satellite velocity"}
        checked={isButtonSelected("velocity")}
        onChange={handleChange}
      />
      <br />
      <FormControlLable
        id={"latitude"}
        label={"Satellite latitude"}
        checked={isButtonSelected("latitude")}
        onChange={handleChange}
      />
      <br />
      <FormControlLable
        id={"longitude"}
        label={"Satellite Longitude"}
        checked={isButtonSelected("longitude")}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};
