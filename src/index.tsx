import { Component } from "react";
import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
	Route,
	Link,
	BrowserRouter as Router
} from 'react-router-dom';


require('./index.css');
import AlbumSearch from "./Album/AlbumSearch";
import ArtistSearch from "./Artist/ArtistSearch";
import Tabs from "./Tab/Tabs";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>

		<h1>Last FM</h1>

		<Router>
			<div>
				<ul>
					<li><Link to="albums">Albums</Link></li>
					<li><Link to="artists">Artists</Link></li>
				</ul>

				<Route exact path="/" component={AlbumSearch} />
				<Route path="/albums" component={AlbumSearch}></Route>
				<Route path="/artists" component={ArtistSearch}></Route>
				<Route path="/artists/:artistName" component={ArtistSearch}></Route>
			</div>
		</Router>
	</div>,
	destination
);

