import React from 'react';
import { shallow } from 'enzyme';
import { SocketIO, Server } from 'mock-socket';
import ChatWindow from './ChatWindow';

jest.useFakeTimers();

describe('ChatWindow tests', () => {
    let mockSocketServer, mockSocket;

    beforeEach(() => {
        mockSocketServer = new Server('http://localhost:3050');

        mockSocketServer.on('connection', socket => {
            socket.on('msg', message => {
                socket.emit('msg', message);
            });
        });

        mockSocket = SocketIO.connect('http://localhost:3050');

        jest.runOnlyPendingTimers();
    });

    it('should emit the right message', () => {
        const message = 'message';
        const component = shallow(<ChatWindow />, { context: { socket: mockSocket } });

        component.find('input[type="text"]').first().simulate('input', { target: { value: message } });
        component.find('button.btn').first().simulate('click');

        expect(component.state().messages.length).toBe(1);
        expect(component.state().messages[0]).toEqual(`${(new Date()).toLocaleTimeString()} - ${message}`);
    });

    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });
});
