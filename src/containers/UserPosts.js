import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem';

import getPostsAction from '../store/fetchApi/getPosts';
import getUsersAction from '../store/fetchApi/getUsers';

class Post extends Component {
  componentDidMount() {
    this.props.getPosts('userId', Number(this.props.match.params.userId));
    this.props.getUsers('id', Number(this.props.match.params.userId));
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
      const { id: userId, name } = this.props.usersList.data[0];

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
        {this.props.postsList.isLoaded && this.props.usersList.isLoaded ? posts() : loading()}
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
    getPosts: (query, userId) => {
      dispatch(getPostsAction(query, userId))
    },
    getUsers: () => {
      dispatch(getUsersAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
