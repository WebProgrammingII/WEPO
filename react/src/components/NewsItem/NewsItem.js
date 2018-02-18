import React from 'react';
import newsService from '../../services/newsService';

class NewsItem extends React.Component {
    componentDidMount() {
        // Get news item based on route param
        const { newsId } = this.props.match.params;
        newsService.getNews(n => n.id === parseInt(newsId)).then(news => {
            this.setState({ newsItem: news[0] });
        });
    }
    constructor(props) {
        super(props);
        this.state = { newsItem: {} };
    }
    render() {
        const { title, longDescription } = this.state.newsItem;
        return (
            <div className="details-container">
                <h3>{title}</h3>
                <p>{longDescription}</p>
            </div>
        )
    }
};

export default NewsItem;
