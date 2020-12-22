import React from 'react'
import "./style.css"
export default function HomeSection(props){
  const { title, subtitle, children, fr4, textShadow, wa} = props

  
  return(
    //set tet only on 1/3 if fr332234
    <section className={ !title && !subtitle ? "home-section noheader bd-red" : "home-section bd-red" }  >

      <div className={ fr4 ? "app-container home-section-header fr4" : "app-container home-section-header" }>
       
       
       {
         title?
         <h1 className={ !subtitle ? "section-title text-md-center bd-green" : "section-title bd-red" }>{title}</h1>:undefined
       }
        {
          subtitle ?
          <span className={textShadow ? "section-subtitle shadow" : "section-subtitle"} >{subtitle}</span>
          : undefined
        }
      </div>

      {children ? 
          <div className=" section-content bd-green">
          {children}
          </div>
      : null}

    </section>
  )
}