import React, { Component } from "react";

class AlbumItems extends Component {
	createTasks(item) {
		return <li key={item.name}>{item.name}: {item.artist} - <a href={item.url}>Link to LastFM</a></li>
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default AlbumItems;