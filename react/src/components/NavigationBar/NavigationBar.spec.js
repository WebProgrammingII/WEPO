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

    afterEach(() => {
        console.error.reset();
    })
});
