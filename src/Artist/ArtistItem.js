import React, { Component } from "react";

class ArtistItem extends Component {
	addArtist(item) {
		if (item !== null && item !== undefined && item.name > 0) {

			return <div>{item.name} :  <a href={item.url}>Link to LastFM</a></div>;
		}
		return <div></div>;
	}

	render() {
		var artist = this.addArtist(this.props.entries);

		return (
			<div>
				{artist}
			</div>
		);
	}
};

export default ArtistItem;