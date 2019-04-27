
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import PhotoItem from '../components/PhotoItem';

import getPhotosAction from '../store/fetchApi/getPhoto';
import getUsersAction from '../store/fetchApi/getUsers';

class AlbumPhoto extends Component {
  componentDidMount() {
    this.props.getPhotos('albumId', Number(this.props.match.params.albumId));
    this.props.getUsers('id', Number(this.props.location.state));
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

    const photos = () => {
      const photo = this.props.photosList.data.map((datum, index) => {
        return (
          <PhotoItem item={datum} key={index} {...this.props} />
        )
      });

      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <div className="col-lg-9 mt-5">
                  <div className="row mt-2">
                    <div className="container">
                      <div className="row">
                        {photo}
                      </div>
                    </div>
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
        {this.props.photosList.isLoaded && this.props.usersList.isLoaded ? photos() : loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    photosList: state.fetchApi.photos,
    usersList: state.fetchApi.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotos: (query, albumId) => {
      dispatch(getPhotosAction(query, albumId))
    },
    getUsers: (query, userId) => {
      dispatch(getUsersAction(query, userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPhoto)
