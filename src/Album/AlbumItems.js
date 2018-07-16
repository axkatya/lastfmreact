import React, { Component } from "react";

class AlbumItems extends Component {
	addAlbum(item) {
		if (item != null) {
			return <li key={item.name}>{item.name}: {item.artist} - <a href={item.url}>Link to LastFM</a></li>;
		}
		return;
	}

	render() {
		var albumEntries = this.props.entries;
		var listItems = albumEntries.map(this.addAlbum);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default AlbumItems;