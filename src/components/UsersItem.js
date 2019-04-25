import React from 'react';
import { connect } from 'react-redux';

const viewAlbum = (props, userId) => {
  console.log('FIND ALBUM BY USER ID', userId);
};

const UsersItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.website}</td>
      <td>
        <button className="btn btn-ligth" title="View" data-toggle="tooltip" onClick={() => viewAlbum(props, item.id)}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
    </tr>
  )
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     albumList: state.fetchApi
//   }
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     getUsers: () => {
//       dispatch(())
//     }
//   }
// }

// export default connect(mapStateToProps, null)(UsersItem);

export default UsersItem;
