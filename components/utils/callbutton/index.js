import React from 'react'
import './style.css'


export default function CallButton(props){
  const { children, width, sm100, height, mr, ml, onClick } = props

  return(
    <button onClick={onClick} className={sm100?"call-button sm100": "call-button" } style={{width, height, marginLeft: ml, marginRight: mr }}>
      {children}
    </button>
  )
}