import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './ThoughtCard.js';

describe('ThoughtCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<ThoughtCard />);
    expect(wrapper).toMatchSnapshot();
  });

});
