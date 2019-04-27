import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import store from './store'

import Home from './containers/Home';
import NotFound from './containers/404';
import Users from './containers/Users';
import UserAlbums from './containers/UserAlbums';
import UserPosts from './containers/UserPosts';
import PostDetail from './containers/PostDetail';
import AlbumPhotos from './containers/AlbumPhotos';
import PhotoDetail from './containers/PhotoDetail';
import PostForm from  './containers/PostForm';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/users" component={ Users } />
              <Route exact path="/album/:userId" component={ UserAlbums } />
              <Route path="/album/photo/:albumId" component={ AlbumPhotos }/>
              <Route path="/photo/:photoId" component={ PhotoDetail } />
              <Route exact path="/post/:userId" component={ UserPosts } />
              <Route path="/post/detail/:postId" component={ PostDetail } />
              <Route exact path="/post/add" component={ PostForm } />
              <Route component={ NotFound } />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
