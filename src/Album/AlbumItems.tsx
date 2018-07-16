import { Component } from "react";
import * as React from 'react';

interface Props {
  entries: Album[];
}

class AlbumItems extends Component<Props> {
  props: Props;

  addAlbum(item: Album) {
    if (item != null) {
      return <li key={item.name}>{item.name}: {item.artist} - <a href={item.url}>Link to LastFM</a></li>;
    }
    return;
  }

  render() {
    var albumEntries = this.props.entries;
    var listItems = albumEntries.map(this.addAlbum);

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
};

export default AlbumItems;