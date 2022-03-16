import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.inputRef= createRef();
  }
  componentDidMount() {
   // console.log(this.inputRef.value='1000')
  }
 getVal () {
console.log(this.inputRef.current.value)
this.inputRef.current.style.color= 'red'
  }
  render() {
    return (
      <div>
        <h1> Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick= {() => this.getVal()}> Check Ref </button>
      </div>
    )
  }
}
