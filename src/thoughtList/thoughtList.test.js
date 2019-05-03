import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './ThoughtList.js';

describe('ThoughtList', () => {

  it('should match the snapshot with no thoughts', () => {
    const wrapper = shallow(<ThoughtList thoughtList={[]} />);
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with thoughts', () => {
    const mockThoughts = [
      {
        title: 'Foo',
        body: 'Bar', 
        id: 0
      }, 
      {
        title: 'Baz',
        body: 'Boo', 
        id: 1
      }
    ];
    const wrapper = shallow(
      <ThoughtList thoughtList={mockThoughts} />
    );
    expect(wrapper).toMatchSnapshot()
  });

});
