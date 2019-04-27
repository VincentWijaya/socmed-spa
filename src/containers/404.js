import React, { Component } from 'react'

export default class NoMatch extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  redirect = () => {
    if (this.state.redirect) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="container text-center mt-2">
        <h1>404 Not Found</h1>
        {this.redirect()}
        <button className="btn btn-primary" onClick={this.setRedirect}>Home</button>
      </div>
    )
  }
}