import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'

import getCommentsAction from '../store/fetchApi/getComments';
import getPostsAction from '../store/fetchApi/getPosts';
import getUsersAction from '../store/fetchApi/getUsers';

class PostDetail extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getPosts();
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

    const postDetail = () => {
      const postId = Number(this.props.match.params.postId);
      const post = this.props.postsList.data[postId - 1];
      const { name } = this.props.usersList.data[post.userId -1];

      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <div className="card mb-4 my-5 mx-5 px-3">
                  <div className="card-body">
                    <h2 className="card-title text-center display-4">{post.title}</h2>
                    <p className="card-text">{post.body}</p>
                  </div>
                  <div className="card-footer text-muted mb-5" v-if="isLoad">
                    Posted by {name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    };

    return (
      <Fragment>
        <Navbar />
        {this.props.postsList.isLoaded ? postDetail() : loading()}
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
    getComments: (action, id) => {
      dispatch(getCommentsAction(action, id))
    },
    getPosts: () => {
      dispatch(getPostsAction())
    },
    getUsers: () => {
      dispatch(getUsersAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)