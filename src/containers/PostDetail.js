import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import swal from 'sweetalert';

import Navbar from '../components/Navbar'
import CommentItem from '../components/CommentsItem';

import getCommentsAction from '../store/fetchApi/getComments';
import addCommentAction from '../store/fetchApi/addComment';
import editCommentAction from '../store/fetchApi/editComment';

class PostDetail extends Component {
  state = {
    comment: '',
    buttonName: 'Comment',
    postId: 'post.id',
    name: 'Dummy User',
    email: 'user@dummy.com',
    commentIndex: null,
  };

  componentDidMount() {
    this.props.getComments(Number(this.props.match.params.postId));
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
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addComment(post) {
    if (this.state.buttonName === 'Comment') {
      this.props.addComment({
        postId: post.id,
        name: this.state.name,
        email: this.state.email,
        body: this.state.comment,
      });
      this.setState({ comment: '' });
      swal("Comment Added!", "", "success");
    } else {
      this.props.editComment({
        postId: this.state.postId,
        name: this.state.name,
        email: this.state.email,
        body: this.state.comment,
        index: this.state.commentIndex
      })
      this.setState({ comment: '' })
    }
  }

  editComment = (comment) => {
    const { body, postId, name, email, index } = comment;
    this.setState({
      comment: body,
      postId,
      name,
      email,
      commentIndex: index,
      buttonName: 'Edit'
    });
  }

  postDetail() {
    const editComment = this.editComment;
    const [user, post] = this.props.history.location.state;
    const { name } = user;

    const comment = this.props.commentsList.data.map((datum, index) => {
      const item = {
        ...datum,
        index,
        editComment
      };

      return (
        <CommentItem item={item} key={index} {...this.props} />
      )
    });

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

                <div className="my-3">
                  <div className="form-group">
                    <div className="col-lg-5">
                      <textarea className="form-control" rows="2" placeholder="Comment........." name="comment" value={ this.state.comment } onChange={ this.onChange }></textarea>
                      <br />
                      <button type="button" className="btn btn-primary" onClick={() => this.addComment(post)}>{ this.state.buttonName }</button>
                    </div>
                  </div>

                  {comment}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        {this.props.commentsList.isLoaded ? this.postDetail() : this.loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    commentsList: state.fetchApi.comments,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getComments: (id) => {
      dispatch(getCommentsAction(id))
    },
    addComment: (body) => {
      dispatch(addCommentAction(body))
    },
    editComment: (comment) => {
      dispatch(editCommentAction(comment));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
