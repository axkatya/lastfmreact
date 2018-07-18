import { Component } from "react";
import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
    Route,
    NavLink,
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
                <div className="tab-list">
                    <NavLink className="tab-list-item" activeClassName="tab-list-active" to="/albums">Albums</NavLink >
                    <NavLink className="tab-list-item" activeClassName="tab-list-active" to="/artists">Artists</NavLink >
                </div>
                <Route exact path="/" component={AlbumSearch} />
                <Route path="/albums" component={AlbumSearch}></Route>
                <Route path="/artists" component={ArtistSearch}></Route>
                <Route path="/artists/:artistName" component={ArtistSearch}></Route>
            </div>
        </Router>
    </div>,
    destination
);

