import React, { Component } from "react";
import ArtistItem from "./ArtistItem";

import axios from 'axios';

class Artist extends React.Component {


	constructor(props) {
		super(props);

		this.searchArtist = this.searchArtist.bind(this);

		this.state = { artist: name = '' };
	}

	searchArtist(e) {


		if (this._inputElement.value !== "") {

			axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
				this._inputElement.value +
				'&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
				.then(response => {
					this.setState({
						artist: response.data.artist
					});
				})
		}
		e.preventDefault();
	}

	render() {
		return (
			<div className="todoListMain">
				Artists
				<div className="header">
					<form onSubmit={this.searchArtist}>
						<input ref={(a) => this._inputElement = a}
							placeholder="enter artist name">
						</input>
						<button type="submit">Search Artist</button>
					</form>
				</div>
				<ArtistItem entries={this.state.artist} />
			</div>

		);
	}
}

export default Artist;