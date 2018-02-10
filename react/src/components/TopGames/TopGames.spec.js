import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TopGames from './TopGames';

describe('TopGames tests', () => {
    let stub;
    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    it('should render when all props are provided', () => {
        shallow(<TopGames games={[ { place: 1, title: 'Title', imageUrl: 'a', shortDescription: 'shortDescription' } ]} />);

        expect(stub.notCalled).toBe(true);
    });

    it('should throw an error if the title is NOT provided', () => {
        shallow(<TopGames games={[ { place: 1, imageUrl: 'a', shortDescription: 'shortDescription' } ]} />);

        expect(stub.calledOnce).toBe(true);
    });

    afterEach(() => {
        console.error.restore();
    });
});
