import React from "react";

import "./SelectProperty.css";

export const SelectProperty = () => {
  return (
    <div className="selectPropertyCard ">
      <span className="title">CSS Material Design radio button</span>

      <div className="radio">
        <input
          type="radio"
          name="radio"
          id="radio1"
          className="radio__input"
          defaultChecked
        />
        <label htmlFor="radio1" className="radio__label">
          Radio 1
        </label>
      </div>
      <br />
      <div className="radio">
        <input type="radio" name="radio" id="radio2" className="radio__input" />
        <label htmlFor="radio2" className="radio__label">
          Radio 2
        </label>
      </div>
      <br />
      <div className="radio">
        <input type="radio" name="radio" id="radio3" className="radio__input" />
        <label htmlFor="radio3" className="radio__label">
          Radio 3
        </label>
      </div>
      <br></br>
    </div>
  );
};
