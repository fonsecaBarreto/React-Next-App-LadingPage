import React from 'react'
export default function InfoCard(props){
  const { title, text} = props
  return (
    <div className="info-card bd-red">
      <span className="info-card-title">{title}</span>
      <span className="info-card-text">{text} </span>
    </div>
  )
}