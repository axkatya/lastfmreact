import { Component } from "react";
import * as React from 'react';
import * as ReactDOM from "react-dom";

require('./index.css');
import AlbumSearch from "./Album/AlbumSearch";
import ArtistSearch from "./Artist/ArtistSearch";
import Tabs from "./Tab/Tabs";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>

    <h1>Last FM</h1>


    
    <Tabs>
      <div id="Albums">
        <AlbumSearch />
      </div>
      <div id="Artists">
        <ArtistSearch />
      </div>

    </Tabs>
   
  </div>,
  destination
);

