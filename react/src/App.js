import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent/MainContent';
import '../styles/site.less';

class App extends React.Component {
    // define getChildContext
    render() {
        return (
            <div>
                <MainContent />
            </div>
        );
    };
}

// Define childContextTypes and use contextTypes for navigation bar

ReactDOM.render(<App />, document.getElementById('app'));
