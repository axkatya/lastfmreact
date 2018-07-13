import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AlbumList from "./AlbumList";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<AlbumList/>
	</div> ,
	destination
);