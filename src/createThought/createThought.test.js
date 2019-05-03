import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './CreateThought.js';

describe('CreateThought', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateThought />);
    expect(wrapper).toMatchSnapshot()
  });

  it('updates the state of the title field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'title' } }
    const expectedState = {
      title: 'abc',
      body: ''
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('updates the state of the body field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'body' } }
    const expectedState = {
      title: '',
      body: 'abc'
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('calls createThought prop function with the data from state as an argument, and input fields go back to empty strings', () => {
    const createThoughtMock = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    const startState = {
      title: 'Hi',
      body: 'Everybody'
    };
    const wrapper = shallow(
      <CreateThought createThought={createThoughtMock} />
    );
    wrapper.instance().setState(startState);
    const expectedState = {
      title: '',
      body: ''
    };

    wrapper.instance().handleSubmit(mockEvent);
    expect(createThoughtMock).toBeCalledWith(startState);
    expect(wrapper.instance().state).toEqual(expectedState);

  });

});
