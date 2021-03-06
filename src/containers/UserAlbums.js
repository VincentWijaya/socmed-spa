import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import AlbumItem from '../components/AlbumItem';

import getAlbumsAction from '../store/fetchApi/getAlbums';

class Album extends Component {
  componentDidMount() {
    this.props.getAlbums('userId', Number(this.props.match.params.userId));
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
      const [ user ] = this.props.history.location.state;
      const { id: userId, name } = user;

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
        {this.props.albumsList.isLoaded ? albums() : loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    albumsList: state.fetchApi.albums,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbums: (query, albumId) => {
      dispatch(getAlbumsAction(query, albumId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
