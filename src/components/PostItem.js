import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import deletePostAction from '../store/fetchApi/deletePost';

const viewPostDetail = (props, postId) => {
  props.history.push(`/post/detail/${postId}`, [props.history.location.state[0], props.item])
};

const deletePost = (props, postIndex) => {
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete this post?",
    icon: "warning",
    dangerMode: true,
  })
    .then(willDelete => {
      if (willDelete) {
        props.deletePost(postIndex);
        swal("Deleted!", "Post has been deleted!", "success");
      }
    });
}

const PostItem = (props) => {
  const { item: post } = props;

  return (
    <tr>
      <td>{post.title}</td>
      <td>
        <button className="btn btn-ligth" title="View Album Photos" data-toggle="tooltip" onClick={() => viewPostDetail(props, post.id)}>
          <i className="fas fa-eye"></i>
        </button>
        &nbsp;
        <button type="button" className="btn btn-xs btn-danger" title="Delete Post" onClick={() => deletePost(props, post.index)}>
          <i className="fa fa-trash fa-sm" />
        </button>
      </td>
    </tr>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    postsList: state.fetchApi.posts,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (index) => {
      dispatch(deletePostAction(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
