import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('matches the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('renders a thoughtList with the correct props', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('initial state is an empty array', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.instance().state).toEqual({thoughts: []})
});

it('createThought adds a thought to state', () => {
  const mockThought = {title: 'Saad', body: 'Is the best', id: 0};
  const wrapper = shallow(<App />);
  expect(wrapper.instance().state).toEqual({thoughts: []})
  wrapper.instance().createThought(mockThought);
  expect(wrapper.instance().state).toEqual({thoughts: [mockThought]})
});

it('deleteThought removes a thought from state', () => {
  const mockThoughts = [
    {title: 'Saad', body: 'Is the best', id: 0},
    {title: 'Lauren', body: 'is hilarious!', id: 1}
  ]
  const wrapper = shallow(<App />);
  wrapper.instance().setState({thoughts: mockThoughts});
  expect(wrapper.instance().state).toEqual({thoughts: mockThoughts});
  wrapper.instance().deleteThought(0);
  expect(wrapper.instance().state).toEqual({thoughts: [{title: 'Lauren', body: 'is hilarious!', id: 1}]});
})

// Feel free to add additional tests. These are meant just to get you started.
