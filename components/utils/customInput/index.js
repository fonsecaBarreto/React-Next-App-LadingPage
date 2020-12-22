import React, { useEffect } from 'react'
import './style.css'

export default class CustomInput extends React.Component{
  state = {
    value: ""
  }

  componentDidMount(){
    this.setState({
      value: this.props.initial ? this.props.initial : ""
    })
  }
  
  handleInputChange = (event) => {
    this.setState({value:event.target.value})
    this.props.onInputChange(this.props.name, event.target.value)
  }

  render(){
    const { label, name, sb, placeHolder } = this.props
    const { value } = this.state
    return (
      <div className={!sb?"custom-input":"custom-input sb"}>
        <label> {label} </label>
        <input name={name} value={value} onChange={this.handleInputChange} placeholder={placeHolder}></input>
      </div>
    )
  }
}