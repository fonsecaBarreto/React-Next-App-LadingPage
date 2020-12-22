import React from 'react'

const PartnerItem = ( props ) => {
  const { item } = props
  if (!item)return <p></p>
  return (
    <div className="partner-item bd-red">
     
      <img
        className="bd-red"
        src={item.image}
        alt="Picture of the author"
        />
      <span className="part-name">{item.name}</span>
      <span  className="part-description">{item.description}</span>
    </div>
  )
}

export default PartnerItem