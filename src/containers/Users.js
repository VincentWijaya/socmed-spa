import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import UsersItem from '../components/UsersItem';

import getUsersAction from '../store/fetchApi/getUsers';

class User extends Component {
  componentDidMount() {
    this.props.getUsers()
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
      const item = this.props.usersList.users.map((datum, index) => {
        return (
          <UsersItem item={datum} key={index} {...this.props} />
        )
      });

      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <h1> List of User </h1>
                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Website</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    { item }
                  </tbody>

                </table>
              </div>
            </div>
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
