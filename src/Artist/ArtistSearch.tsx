import { Component } from "react";
import * as React from 'react';
import ArtistItem from "./ArtistItem";

import axios from 'axios';

interface State {
  artist: Artist;
}

class ArtistSearch extends Component<any, State> {
  private inputElement: HTMLInputElement;

  constructor(props: any) {
    super(props);

    this.searchArtist = this.searchArtist.bind(this);

  }

  searchArtist(event: any): void {


    if (this.inputElement.value !== "") {

      axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
        this.inputElement.value +
        '&api_key=91c70ecd632c37f12855243d9526cc6f&format=json')
        .then(response => {
          this.setState({
            artist: response.data.artist
          });
        })
    }
    event.preventDefault();
  }

  addArtist(state: State) {
    if (state!=null && state.artist != null) {
      return <ArtistItem entry={state.artist}/>;
    }
    return;
  }

  render() {
    var artist = this.addArtist(this.state);
    return (
      <div >
        Artists
				<div>
          <form onSubmit={this.searchArtist}>
            <input ref={(a: HTMLInputElement) => this.inputElement = a}
              placeholder="enter artist name">
            </input>
            <button type="submit">Search Artist</button>
          </form>
        </div>
                
                {artist}
          
          
      </div>
    );
  }
}

export default ArtistSearch;