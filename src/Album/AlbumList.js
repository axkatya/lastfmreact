import React, { Component } from "react";
import AlbumItems from "./AlbumItems";

import  axios from 'axios';

class AlbumList extends React.Component {
	

	constructor(props) {
		super(props);

		

		this.searchAlbum = this.searchAlbum.bind(this);

	  this.state = {
	    albums: []
	  };
	}

  searchAlbum(e) {

    if (this._inputElement.value !== "") {

      axios.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' +
          this._inputElement.value +
          '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
        .then(response => {
          this.setState({
            albums: response.data.results.albummatches.album
          });
        })
    }
      e.preventDefault();
  }

    render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.searchAlbum}>
						<input ref={(a) => this._inputElement = a}
							placeholder="enter album name">
						</input>
						<button type="submit">Search Album</button>
					</form>
        </div>
  <ul>
  <AlbumItems entries={this.state.albums} />
</ul>
      
			</div>
		);
	}
}

export default AlbumList;