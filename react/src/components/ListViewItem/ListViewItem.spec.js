import React from 'react';
import { shallow } from 'enzyme';
import ListViewItem from './ListViewItem';

// Define a test for ListViewItem
describe('ListViewItem tests', () => {
    it('should contain the title provided', () => {
        const component = shallow(<ListViewItem info={{ title: 'Hello!' }} />);
        expect(component.find('h3').text()).toEqual('Hello!');
    });
});
