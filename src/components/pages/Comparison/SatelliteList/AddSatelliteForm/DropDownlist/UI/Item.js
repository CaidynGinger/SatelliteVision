import React from 'react'

export const Item = (props) => {
  return (
    <p data={props.id} onClick={() => props.onClick({
      name: props.name,
      id: props.id
    })}>{props.name}</p>
  )
}
