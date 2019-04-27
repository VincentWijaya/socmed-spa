import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import AlbumItem from '../components/AlbumItem';

import getAlbumsAction from '../store/fetchApi/getAlbums';
import getUsersAction from '../store/fetchApi/getUsers';

class Album extends Component {
  componentDidMount() {
    this.props.getAlbums('userId', Number(this.props.match.params.userId));
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

    const albums = () => {
      const { id: userId, name } = this.props.usersList.data[0];

      const item = this.props.albumsList.data.map((datum, index) => {
        if (Number(userId) === datum.userId) {
          return (
            <AlbumItem item={datum} key={index} {...this.props} />
          )
        }
        return null;
      });

      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <h1> Album of {name} </h1>
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
        {this.props.albumsList.isLoaded && this.props.usersList.isLoaded ? albums() : loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    albumsList: state.fetchApi.albums,
    usersList: state.fetchApi.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbums: (query, albumId) => {
      dispatch(getAlbumsAction(query, albumId))
    },
    getUsers: (query, userId) => {
      dispatch(getUsersAction(query, userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
