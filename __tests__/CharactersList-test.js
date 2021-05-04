import React from 'react';
import renderer from 'react-test-renderer';
import CharList from '../src/components/CharactersList';

test('renders correctly', () => {
  const tree = renderer.create(<CharList />).toJSON();
  expect(tree).toMatchSnapshot();
});
