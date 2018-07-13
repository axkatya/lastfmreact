import React from "react";
import ReactDOM from "react-dom";

require('./index.css');
import AlbumList from "./Album/AlbumList";
import Artist from "./Artist/Artist";
import Tabs from "./Tab/Tabs";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>

		<h1>Last FM</h1>


		<Tabs>
			<div label="Albums">
				<AlbumList />
			</div>
			<div label="Artists">
				<Artist />
			</div>

		</Tabs>
	</div>,
	destination
);

