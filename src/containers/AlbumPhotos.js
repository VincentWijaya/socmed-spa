
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'

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

    const viewAlbumPhotos = () => {
      console.log('delete photo');
    }

    const photos = () => {
      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <img className="card-img-top" src={this.props.photosList.data[0].thumbnailUrl} alt="" />
                    <div className="card-body">
                      <h4 className="card-title">
                        JUDUL
                      </h4>
                      <button className="btn btn-ligth" title="View Album Photos" data-toggle="tooltip" onClick={() => viewAlbumPhotos()}>
                        <i className="fas fa-eye"></i>
                      </button>
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
