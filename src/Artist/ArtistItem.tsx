import { Component } from "react";
import * as React from 'react';

interface Props {
    entry: Artist;
}

class ArtistItem extends Component<Props> {
    props: Props;

    showArtist(item: Artist) {
        if (item !== null && item !== undefined && item.name.length > 0) {
            const image = item.image
                .filter((img) => img['size'] === 'large')
                .map((img) =>
                    <img src={img['#text']} />
            );

            return <div>{item.name} :  <a href={item.url}>Link to LastFM</a>
                {image}
                <p>Biography</p>
                <p>Summary</p>
                {item.bio.summary}
                <p>Content</p>
                {item.bio.content}
            </div>;
        }
        return <div></div>;
    }

    render() {
        var artist = this.showArtist(this.props.entry);

        return (
            <div>
                {artist}
            </div>
        );
    }
};

export default ArtistItem;