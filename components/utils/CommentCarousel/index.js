import './style.css'
import comments from './comments.json'
import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Item from './Item'
export default class CommmentCarousel extends React.Component  {

  state = {
    divideBy: 3,
    itemWidth: 300,
    index: 0
  }

  handleResize  = () =>{  
    var vpWidth = window.innerWidth - 120
    var divideBy = vpWidth > 1526 ? 5 : vpWidth > 1224 ? 4 : 
    vpWidth > 960 ? 3 :   vpWidth > 560 ? 2 : vpWidth > 360 ? 1.2 : .8
    var itemWidth = Math.round(vpWidth / divideBy)
    this.setState({divideBy, itemWidth})
  }

  autoMove = () =>{
    setTimeout( () => {
      this.move('left') 
      return this.autoMove() },5000) 
  } 
  componentDidMount(){
    console.log("MOUNTED")
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.autoMove()
  }
/* if (typeof window !== 'undefined') {   */
  move = (dir) => {
    const { index, itemWidth, divideBy } = this.state
    var indice = index
    switch(dir){
      case "left": {
        indice =  ( index <= ( comments.length - divideBy ) * -1) ?    0  : index - 1 
      }break;
      case "right": {
        indice = ( index < 0 ) ? index + 1 : (comments.length - divideBy) * -1
      }
    } 
    this.setState({divideBy, itemWidth, index:indice})
  }

  render() {
    var { index, itemWidth } = this.state
    var { wa } = this.props // aspas agora fica branca
    return (

      <div className="comments-flow bd-red" >
        <div className="comments-viewport bd-blue">
          <div className="comments-row bd-green" style={{marginLeft: ( itemWidth * index ) + "px"}}>  
          { comments.map( (item, i) => {  return (  <Item wa={wa} width={itemWidth} height="100" className="bd-red" key={i} entry={item}></Item> ) })} 
        </div>
      </div>
    
      <button className="carousel-float-button left-button" onClick={() => this.move('left')}> <FaChevronLeft></FaChevronLeft>
      </button>

      <button className="carousel-float-button right-button" onClick={() => this.move('right')}> <FaChevronRight></FaChevronRight>
      </button>

    </div>
    )
  }
}
