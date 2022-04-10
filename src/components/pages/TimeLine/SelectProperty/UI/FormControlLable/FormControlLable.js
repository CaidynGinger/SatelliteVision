import React from "react";

export const FormControlLable = ({onChange, checked, id, label}) => {
  return (
    <div className="radio">
      <input  onClick={onChange} value={id} defaultChecked={checked} type="radio" name='radio'  id={id} className="radio__input" />
      <label htmlFor={id} className="radio__label">
        {label}
      </label>
    </div>
  );
};
