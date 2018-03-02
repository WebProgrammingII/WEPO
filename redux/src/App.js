import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import CounterWrapper from './components/CounterWrapper/CounterWrapper';
import Counter from './components/Counter/Counter';
import Name from './components/Name/Name';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <CounterWrapper>
                    <Counter />
                    <Name />
                </CounterWrapper>
            </div>
        );
    };
};

ReactDOM.render(<Provider store={createStore(reducers)}><App /></Provider>, document.getElementById('app'));
