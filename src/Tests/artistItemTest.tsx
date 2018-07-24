import ArtistItem from '../Artist/ArtistItem';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

test('ArtistItem renders the text inside it', () => {
  const artist = ({ 
    name: 'Cher',
    url: 'http://',
    image: {}
    , bio: {published:'', summary: 'summary 1123425', content: 'content235456'}}) as Artist;

  const wrapper = shallow(
      <ArtistItem entry={artist} />
  );
  const p = wrapper.find('.card__itemname');
  expect(p.text()).toBe('Cher');
});