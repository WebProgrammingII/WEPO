import { shallow } from 'enzyme';
import React from 'react';
import NavigationBar from './NavigationBar';
import sinon from 'sinon';

describe('NavigationBar tests', () => {
    let stub;
    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    it('should receive error when logoImageUrl is NOT provided', () => {
        shallow(<NavigationBar />);

        expect(stub.calledOnce).toBe(true);
    });

    it('should contain links', () => {
        const component = shallow(<NavigationBar />);
        expect(component.find('.nav-link').length).toBe(3);
    });

    afterEach(() => {
        console.error.reset();
    })
});
