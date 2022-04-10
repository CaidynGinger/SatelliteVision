import React from 'react'

import classes from './ContentCard.module.css'

export const ContentCard = (props) => {
  return (
    <div className={classes.card}>
        {props.children}
    </div>
  )
}
