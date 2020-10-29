//import logo from './logo.svg';

import './App.css';
import Home from './component/Posts/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './component/Posts/PostDetails/PostDetails';
import NoMatch from './component/Posts/NoMatch/NoMatch';
import Comment from './component/Posts/Comment/Comment';

function App() {
  
  return (
    <div>
    <Router>
    <Switch>
    <Route path="/home">
    <Home/>
    </Route>
    <Route path="/post/:postId">
    <PostDetails></PostDetails>
    </Route>
    <Route path="/comments/:commentId">
    <Comment/>
    </Route>
    <Route path="/">
    <Home/>
    </Route>
    <Route path="*">
    <NoMatch/>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
