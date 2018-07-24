import { Component } from "react";
import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';


require('./index.css');
import AlbumSearch from "./Album/AlbumSearch";
import ArtistSearch from "./Artist/ArtistSearch";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>

    <h1>Last FM</h1>

    <Router>
      <div>
        <div className="container__tabmenu tablist">
          <NavLink className="tablist__item" activeClassName="tablist__item--active" to="/albums">Albums</NavLink >
          <NavLink className="tablist__item" activeClassName="tablist__item--active" to="/artists">Artists</NavLink >
        </div>
        <Switch>
          <Route exact path="/" component={AlbumSearch} />
          <Route path="/albums" component={AlbumSearch}></Route>
          <Route path="/artists" component={ArtistSearch}></Route>
          <Route path="/artists/:artistName" component={ArtistSearch}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </div>,
  destination
);

