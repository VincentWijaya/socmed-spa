import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="mt-5">
          <Fragment>
            <h1 className="pt-5 text-center">Welcome to Instagam</h1>
          </Fragment>
        </div>
      </div>
    );
  }
};
