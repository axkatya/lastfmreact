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

      const image = item.image
        .filter((img) => img['size'] === 'large')
        .map((img) =>
          <img src={img['#text']} />
        );

      return <li key={item.name}>
        <div className="container__itemname">
          {item.name}
        </div>
        <div className="container__itemimage">
          {image}
        </div>
        <div className="container__iteminfo">

          <Router>
            <div>
              <Link to="/artists/:artistName">{item.artist}</Link>
              <Route path="/artists/:artistName" component={ArtistSearch}></Route>
            </div>
          </Router>
          <a href={item.url}>Link to LastFM</a>
        </div>
      </li>;
    }
    return;
  }

  render() {
    var albumEntry = this.props.entry;

    return (
      <div className="container__list">
        <ul>

          {this.showAlbum(albumEntry)}

        </ul>
      </div>
    );
  }
};

export default AlbumItem;