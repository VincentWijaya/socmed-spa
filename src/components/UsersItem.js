import React from 'react';

const viewAlbum = (props, userId) => {
  props.history.push(`/album/${userId}`)
};

const UsersItem = (props) => {
  const { item: user } = props;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td>
        <button className="btn btn-ligth" title="View User Album" data-toggle="tooltip" onClick={() => viewAlbum(props, user.id)}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
    </tr>
  )
};

export default UsersItem;
