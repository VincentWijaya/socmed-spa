import React from 'react';

const viewPostDetail = (props, postId) => {
  props.history.push(`/post/detail/${postId}`, props)
};

const PostItem = (props) => {
  const { item: post } = props;

  return (
    <tr>
      <td>{post.title}</td>
      <td>
        <button className="btn btn-ligth" title="View Album Photos" data-toggle="tooltip" onClick={() => viewPostDetail(props, post.id)}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
    </tr>
  )
};

export default PostItem;
