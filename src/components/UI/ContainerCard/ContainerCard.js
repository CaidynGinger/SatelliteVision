import React from 'react'
import { Container } from 'react-bootstrap'

import './ContainerCard.css'

export const ContainerCard = (props) => {
  return (
    <Container className='ContainerCard'>
        {props.children}
    </Container>
  )
}
