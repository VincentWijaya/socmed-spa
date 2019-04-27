import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem';

import getPostsAction from '../store/fetchApi/getPosts';

class Post extends Component {
  componentDidMount() {
    this.props.getPosts('userId', Number(this.props.match.params.userId));
  }

  loading() {
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

  posts() {
    const [user] = this.props.history.location.state;
    const { id: userId, name } = user;

    const item = this.props.postsList.data.map((datum, index) => {
      if (Number(userId) === datum.userId) {
        const props = {
          ...datum,
          name,
          index
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
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        {this.props.postsList.isLoaded ? this.posts() : this.loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    postsList: state.fetchApi.posts,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPosts: (query, userId) => {
      dispatch(getPostsAction(query, userId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
