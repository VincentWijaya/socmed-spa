import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem';

import getPostsAction from '../store/fetchApi/getPosts';
import getUsersAction from '../store/fetchApi/getUsers';

class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
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

    const posts = () => {
      const indexUser = Number(this.props.match.params.userId);
      const { id: userId, name } = this.props.usersList.data[indexUser - 1];

      const item = this.props.postsList.data.map((datum, index) => {
        if (Number(userId) === datum.userId) {
          const props = {
            ...datum,
            name
          };

          return (
            <PostItem item={props} key={index} {...this.props} />
          )
        }
        return null;
      });

      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <h1> Posts of {name} </h1>
                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {item}
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
        <Navbar />
        {this.props.postsList.isLoaded ? posts() : loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    postsList: state.fetchApi.posts,
    usersList: state.fetchApi.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: () => {
      dispatch(getPostsAction())
    },
    getUsers: () => {
      dispatch(getUsersAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
