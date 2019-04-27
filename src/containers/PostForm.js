import React, { Component, Fragment } from 'react';

import Navbar from '../components/Navbar';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  addPost = () => {
    console.log('adding post');
  }

  render() {
    const form = () => {
      return (
        <div>
          <div className="container">
            <div className="mt-5">

              <div className="row pt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                  <h2>Add New Data</h2>
                  <hr />
                </div>
              </div>

              <div className="d-flex justify-content-center text-center">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" name="title" placeholder="Your post title" autoComplete="off" value={this.state.title} onChange={this.onChange} />
                </div>
              </div>

              <div className="d-flex justify-content-center text-center">
                <div className="form-group">
                  <label>Content</label>
                  <input type="text-area" className="form-control" name="body" placeholder="Your post content" autoComplete="off" value={this.state.body} onChange={this.onChange} />
                </div>
              </div>

              <div className="d-flex justify-content-center text-center">
                <div className="form-group">
                  <button type="submit" className="btn btn-primary" onClick={() => this.addPost()}>Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    };

    return (
      <Fragment>
        <Navbar/>
        { form() }
      </Fragment>
    )
  }
};

export default PostForm;
