import React, { useEffect, useState } from "react";

import classes from "./AddSatelliteForm.module.css";
import { DropDownList } from "./DropDownlist/DropDownlist";

export const AddSatelliteForm = (props) => {

  console.log()

    const [satelliteNamesList, setSatelliteNamesList] = useState(props.satelliteNamesList)
    const [inputValue, setInputValue] = useState('')
    const [dropDownList, setDropDownList] = useState([])



    useEffect(()=> {
        setDropDownList(satelliteNamesList.filter(x => x.name.toLowerCase().includes(inputValue.toLowerCase())))
    }, [inputValue,satelliteNamesList]);

    function itemClicked(selectedItem) {
        setInputValue(selectedItem.name)
        setShowHideDropDownList(false)
        setSelectedSatelliteButton(selectedItem)
    }

    const [showHideDropDownList, setShowHideDropDownList] = useState(false)

    function showDropDownList() {
        console.log('clicked')
        if(showHideDropDownList === true){
            setShowHideDropDownList(false)
        } else {
            setShowHideDropDownList(true)
        }
        console.log(showHideDropDownList)
    }

    const [selectedSatelliteButton, setSelectedSatelliteButton] = useState({})

    const addSatelliteHandler = (event) => {
      event.preventDefault()
      props.setSelectedSatellite(selectedSatelliteButton)
    }

  return (
    <div>
      <div
        className={classes.AddSatelliteFormBackground}
        onClick={props.showHideForm}
      ></div>
      <form onSubmit={addSatelliteHandler} className={classes.AddSatelliteForm}>
          <h4>Add Satellite</h4>
          <hr/>
          <br/>
          {/* https://codepen.io/chris__sev/pen/LYOyjY */}
        <div className={classes.group}>                 
          <input onClick={showDropDownList} value={inputValue} type="text" required onChange={(e) => setInputValue(e.target.value)}/>
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label>Name</label>
        </div>
        {showHideDropDownList ? <DropDownList onClick={itemClicked} satelliteNamesList={dropDownList}/> : null}
        <button type="submit">add satellite</button>
      </form>
    </div>
  );
};