import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent/MainContent';
import '../styles/site.less';

const App = () => {
    return (
        <div>
            <MainContent />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
