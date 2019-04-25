import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import getUsersAction from '../store/fetchApi/getUsers';

class User extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const loading = () => {
      return (
        <div>
          <div className="mt-5">
            <Fragment>
              <div className="pt-5"> <div className="loader"></div> </div>
            </Fragment>
          </div>
        </div>
      )
    };

    const users = () => {
      return (
        <section>
           <div className="mt-5">
            <Fragment>
              <h1 className="pt-5 text-center">{ JSON.stringify(this.props.usersList) }</h1>
            </Fragment>
           </div>
        </section>
      )
    };

    return (
      <Fragment>
        <Navbar />=
        { this.props.usersList.isLoaded ? users() : loading() }
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    usersList: state.fetchApi
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => {
      dispatch(getUsersAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
