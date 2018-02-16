import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import TopGames from './components/TopGames/TopGames';
import About from './components/About/About';
import News from './components/News/News';
import NewsItem from './components/NewsItem/NewsItem';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../styles/site.less';

// logo = https://www.spreadshirt.es/image-server/v1/mp/designs/15527121,width=178,height=178/pro-gamer.png
class App extends React.Component {
    getChildContext() {
        return {
            user: {
                loginId: 'arnarl',
                displayName: 'Arnar Leifsson'
            }
        }
    }
    render() {
        return (
            <div>
                <NavigationBar logoImageUrl="https://www.spreadshirt.es/image-server/v1/mp/designs/15527121,width=178,height=178/pro-gamer.png" />
                <Switch>
                  <Route exact path="/news" render={() => {
                    return <Redirect to="/" />;
                  }} />
                  <Route exact path="/" component={News} />
                  <Route path="/:newsId" component={NewsItem} />
                  <Route path="/topgames" component={TopGames} />
                  <Route path="/about" component={About} />
                </Switch>
            </div>
        );
    };
}

App.childContextTypes = {
    user: PropTypes.shape({
        loginId: PropTypes.string,
        displayName: PropTypes.string
    })
};

// Define childContextTypes and use contextTypes for navigation bar

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
