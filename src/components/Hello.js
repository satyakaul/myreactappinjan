import React, { Component } from 'react'

class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Guest',
      email: 'guest@gmail.com'
    }
  }

  onClickHandler = () => {
    this.setState({
      name: 'Satya',
      email: 'satya@gmail.com'
    })
  }

  render () {
    return (
      <div>
        <h1>
          Welcome {this.state.name} to State Example using class based component
        </h1>
        <h1> Email: {this.state.email}</h1>
        <button class='btn btn-primary btn-lg' onClick={this.onClickHandler}>
          Login
        </button>
      </div>
    )
  }
}

export default Hello
