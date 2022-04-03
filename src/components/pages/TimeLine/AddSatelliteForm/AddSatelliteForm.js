import React, { useEffect, useState } from "react";

import classes from "./AddSatelliteForm.module.css";
import { DropDownList } from "./DropDownList/DropDownList";

export const AddSatelliteForm = ({names, onClick, onAddSatellite}) => {
  const [showHideDropDownList, setShowHideDropDownList] = useState(false);

  const [inputValue, setInputValue] = useState('')


    const [dropDownList, setDropDownList] = useState([])

    useEffect(() => {
        const namesDropDownList = names.map((item) => {return item.name})
        setDropDownList(namesDropDownList.filter(x => x.toLowerCase().includes(inputValue.toLowerCase())))
    }, [inputValue,names]);

  function showDropDownList() {
    console.log("clicked");
    if (showHideDropDownList === true) {
      setShowHideDropDownList(false);
    } else {
      setShowHideDropDownList(true);
    }
    console.log(showHideDropDownList);
  }

  const clickedSatelliteHandler = (event) => {
    setShowHideDropDownList(false)
    onClick()
    onAddSatellite((names.filter(i => i.name === event)[0]))
  }

  return (
    <div>
      <div onClick={onClick} className={classes.AddSatelliteFormBackground}></div>
      <form className={classes.AddSatelliteForm}>
        <h4>Add Satellite</h4>
        <hr />
        <br />
        {/* https://codepen.io/chris__sev/pen/LYOyjY */}
        <div className={classes.group}>
          <input type="text" value={inputValue} required onClick={showDropDownList} onChange={(e) => setInputValue(e.target.value)}/>
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label>Name</label>
        </div>
        {showHideDropDownList ? <DropDownList names={dropDownList} onClick={clickedSatelliteHandler} /> : null}
      </form>
    </div>
  );
};
