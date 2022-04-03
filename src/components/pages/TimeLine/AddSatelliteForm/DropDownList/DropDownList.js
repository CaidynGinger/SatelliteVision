import React from 'react'

import classes from './DropDownList.module.css'
import { Item } from './UI/Item';

export const DropDownList = ({names,onClick}) => {
  return (
    <div className={classes.drop_down_list}>
      {names.map((item, index) => {
        return <Item onClick={onClick} key={index} name={item}/>;
      })}
    </div>
  )
}
