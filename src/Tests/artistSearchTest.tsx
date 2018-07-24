import ArtistSearch from '../Artist/ArtistSearch';
import * as React from 'react';
import { shallow } from 'enzyme';

test('ArtistSearch button renders the text', () => {
  const item = {
    params: {artistName: 'BTS'}
  }
  const wrapper = shallow(
    <ArtistSearch match={item} />
  );

  const buttonText = wrapper.find('button').at(0);
  expect(buttonText.text()).toBe('Search Artist');
});