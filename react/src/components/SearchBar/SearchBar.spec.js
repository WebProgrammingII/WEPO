import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

// Define tests for SearchBar
describe('SearchBar tests', () => {
    it('should call the props function with inputted string', () => {
        // Arrange
        const search = 'Search!';
        let input = '';
        const component = shallow(<SearchBar onFilter={(e) => { input = e.target.value; }} />);

        // Act
        component.find('input[type="text"]').first().simulate('input', { target: { value: search } });

        // Assert
        expect(input).toEqual(search);
    });
});
