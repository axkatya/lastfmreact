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

      const filter = Array.prototype.filter;
      const filteredArray = filter.call(item.image, (img: any) => img['size'] === 'large');

      const map = Array.prototype.map;
      const image = map.call(filteredArray, (img: any) => <img src={img['#text']} />);

      return (
        <div className="container__card">
          <div className="card__itemimage">
            {image}
          </div >

          <div className="card__item">


            <div className="card__itemname">
              {item.name}
            </div>
            <div className="card__iteminfo">

              <Router>
                <div>
                  <Link to={{ pathname: '/artists/' + item.artist }}>{item.artist}</Link>
                  <Route path="/artists/:artistName" component={ArtistSearch}></Route>
                </div>
              </Router>
              <a href={item.url}>Link to LastFM</a>
            </div>
          </div>
        </div>);
    }
    return;
  }

  render() {
    var albumEntry = this.props.entry;

    return (
      <div>

        {this.showAlbum(albumEntry)}

      </div>
    );
  }
};

export default AlbumItem;