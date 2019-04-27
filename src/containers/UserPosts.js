import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import swal from 'sweetalert';

import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem';

import getPostsAction from '../store/fetchApi/getPosts';
import addPostAction from '../store/fetchApi/addPost';

class Post extends Component {
  state = {
    title: '',
    body: '',
    userId: 1,
    buttonName: 'Add Post'
  };

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

  addPost = () => {
    let userId = this.state.userId;

    if (this.props.location.state[0]) {
      userId = this.props.location.state[0].id;
    }

    this.props.addPost({
      title: this.state.title,
      body: this.state.body,
      userId: userId,
    });
    
    this.setState({
      title: '',
      body: '',
    });
    swal("Post Added!", "", "success");
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  postForm = () => {
    return (
      <div>
        <div className="container">
          <div className="mb-4">

            <div className="row pt-3">
              <div className="col-md-3"></div>
              <div className="col-md-6 text-center">
                <h2>{this.state.buttonName}</h2>
                <hr />
              </div>
            </div>

            <div className="d-flex justify-content-center text-center">
              <div className="form-group col-lg-7">
                <label>Title</label>
                <input type="text" className="form-control" name="title" placeholder="Your post title" autoComplete="off" value={this.state.title} onChange={this.onChange} />
              </div>
            </div>

            <div className="d-flex justify-content-center text-center">
              <div className="form-group">
                <label>Content</label>
                <textarea className="form-control" rows="8" cols="80" coloumn="10" placeholder="Content" name="body" value={this.state.body} onChange={this.onChange}></textarea>
              </div>
            </div>

            <div className="d-flex justify-content-center text-center">
              <div className="form-group">
                <button type="submit" className="btn btn-primary" onClick={() => this.addPost()}>{this.state.buttonName}</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

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
              <hr/>
              { this.postForm() }
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
    addPost: (post) => {
      dispatch(addPostAction(post))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
