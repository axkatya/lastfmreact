import { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import * as React from 'react';
import ArtistSearch from "../Artist/ArtistSearch";

interface Props {
  entry: Album;
}

class AlbumItem extends Component<Props> {
  props: Props;

  showAlbum(item: Album) {
    if (item != null) {
      return <li key={item.name}>{item.name}:
               <Router>
          <div>
            <Link to="/artists/:artistName">{item.artist}</Link>
            <Route path="/artists/:artistName" component={ArtistSearch}></Route>
          </div>
        </Router>
        - <a href={item.url}>Link to LastFM</a></li>;
    }
    return;
  }

  render() {
    var albumEntry = this.props.entry;

    return (
      <ul>
        {this.showAlbum(albumEntry)}
      </ul>
    );
  }
};

export default AlbumItem;