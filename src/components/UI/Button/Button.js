import React from 'react'

import classes from './Button.module.css';

export const Button = ({buttonTitle , onClick}) => {
  return (
    <button onClick={onClick} className={classes.button}>{buttonTitle}</button>
  )
}
