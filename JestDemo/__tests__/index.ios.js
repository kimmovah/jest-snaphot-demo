import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import { Button} from 'react-native';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it('toggles more text when button is pressed', () => {
  const tree = shallow(
    <Index />
  );

  const btn = tree.find(Button).first();
  let text = 'Here\'s some more text';
  expect(tree.contains(text)).toBe(false);
  btn.simulate('press');
  expect(tree.contains(text)).toBe(true);
  btn.simulate('press');
  expect(tree.contains(text)).toBe(false);
});
