import { Component } from "react";
import * as React from 'react';

interface Props {
  entry: Artist;
}

class ArtistItem extends Component<Props> {
  props: Props;

  showArtist(item: Artist) {
    if (item !== null && item !== undefined && item.name.length > 0) {

      const filter = Array.prototype.filter;
      const filteredArray = filter.call(item.image, (img: any) => img['size'] === 'large');

      const map = Array.prototype.map;
      const image = map.call(filteredArray, (img: any) => <img src={img['#text']} />);

      return <div>
        <div className="container__itemname">
          {item.name}
        </div>
        <div className="container__itemimage">
          {image}
        </div>
        <div className="container__iteminfo">
          <a href={item.url}>Link to LastFM</a>
          <p>Biography</p>
          <p>Summary</p>
          {item.bio.summary}
          <p>Content</p>
          {item.bio.content}
        </div>
      </div>;
    }
    return <div></div>;
  }

  render() {
    var artist = this.showArtist(this.props.entry);

    return (
      <div className="container__card">
        {artist}
      </div>
    );
  }
};

export default ArtistItem;