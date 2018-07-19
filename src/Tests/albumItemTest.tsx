import AlbumItem from '../Album/AlbumItem';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

test('AlbumItem renders the text inside it', () => {
  const album = ({
    name: 'love',
    url: 'http://',
    image: {}

  }) as Album;

  const wrapper = shallow(
    <AlbumItem entry={album} />
  );
  const p = wrapper.find('.container__itemname');
  expect(p.text()).toBe('love');
});