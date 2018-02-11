import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarLinkWrapper from './components/NavigationBarLinkWrapper/NavigationBarLinkWrapper';
import '../styles/site.less';

class App extends React.Component {
    // define getChildContext
    render() {
        return (
            <div>
                <NavigationBar imgSrc="http://woltag.com/wp-content/photos/2014/09/Play-Station-symbol-640x480.png">
                    <NavigationBarLinkWrapper />
                </NavigationBar>
                <MainContent />
            </div>
        );
    };
}

// Define childContextTypes and use contextTypes for navigation bar

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
