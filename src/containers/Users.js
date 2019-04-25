import React, { Component, Fragment } from 'react'
import axios from "axios";
import Navbar from '../components/Navbar'

const fetchUsers = async () => {
  const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return users
};

export default class User extends Component {
  state = {
    users: [],
    isLoaded: false,
  }

  async componentDidMount() {
    const result = await fetchUsers();
    this.setState({ users: result, isLoaded: true });
  }

  render() {
    const loading = () => {
      return (
        <div>
          <Navbar />
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
          <Navbar />
           <div className="mt-5">
            <Fragment>
              <h1 className="pt-5 text-center">Users List</h1>
            </Fragment>
           </div>
        </section>
      )
    };

    return (
      <Fragment>
        { this.state.isLoaded ? users() : loading() }
      </Fragment>
    )
  }
};
