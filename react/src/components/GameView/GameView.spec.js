import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GameView from './GameView';

describe('GameView tests', () => {
    let stub;
    beforeEach(() => {
        // Hi-jack console-error
        stub = sinon.stub(console, 'error');
    });

    it('should render correctly when receive all props', () => {
        shallow(<GameView place={1} title="title" imageUrl="www.someimageurl.is/image.jpeg" shortDescription="shortDescription" />);

        expect(stub.notCalled).toBe(true);
    });

    it('should NOT render correctly when receive wrong props', () => {
        shallow(<GameView place="1" title="title" imageUrl="www.someimageurl.is/image.jpeg" shortDescription="shortDescription" />);

        expect(stub.calledOnce).toBe(true);
    });

    afterEach(() => {
        // Clean-up console error
        console.error.restore();
    });
});
