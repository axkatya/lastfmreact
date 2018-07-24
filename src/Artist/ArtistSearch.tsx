import { Component } from "react";
import * as React from 'react';
import ArtistItem from "./ArtistItem";
import axios from 'axios';

interface State {
	artist: Artist;
}

interface Props {
  match: any;
}

class ArtistSearch extends Component<Props, State> {
	private inputElement: HTMLInputElement;
	props: Props;

	constructor(props: Props) {
		super(props);
		this.props = props;
    this.searchArtist = this.searchArtist.bind(this);

	  console.log(this.props.match.params.artistName);
    if (this.props.match != null && this.props.match.params != null && this.props.match.params.artistName.length > 0) {
      this.getArtist(this.props.match.params.artistName);
	  }
	}

	getArtist(artistNameSearch: string) {
		axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
			artistNameSearch +
			'&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
			.then(response => {
				this.setState({
					artist: response.data.artist
				});
			});
	}

	searchArtist(event: any): void {

		if (this.inputElement.value !== "") {
			this.getArtist(this.inputElement.value);
		}

		event.preventDefault();
	}

	addArtist(state: State) {
		if (state != null && state.artist != null) {
			return <ArtistItem entry={state.artist} />;
		}
		return;
	}

	render() {
		var artist = this.addArtist(this.state);
		return (
      <div className="container__search">
				Artists
				<div>
					<form onSubmit={this.searchArtist}>
						<input ref={(a: HTMLInputElement) => this.inputElement = a}
							placeholder="enter artist name">
            </input>

            <button className="btn" type="submit">Search Artist</button>
					</form>
				</div>

				{artist}


			</div>
		);
	}
}

export default ArtistSearch;