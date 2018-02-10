import React from 'react';
import ListView from '../ListView/ListView';
import ListViewItem from '../ListViewItem/ListViewItem';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            categoryFilter: 'technology',
            // Should have been retrieved from a server
            news: [
                {
                    id: 1,
                    title: 'Zombie apocalypse!',
                    shortDescription: 'A zombie apocalypse has broken loose! All residents are encouraged to lock their doors shut!',
                    category: 'world'
                },
                {
                    id: 2,
                    title: 'BitCoin has dropped!',
                    shortDescription: 'BitCoin took a steep dip this morning going from $8000 to $100. Wall Street is in wreck.',
                    category: 'financial'
                },
                {
                    id: 3,
                    title: 'PS5 has announced its debut',
                    shortDescription: 'Sony has announced the new PS5! Tokyo goes wild!',
                    category: 'technology'
                }
            ]
        };
    };
    onFilter(e) {
        this.setState({
            filter: e.target.value
        });
    }
    render() {
        const { news, filter, categoryFilter } = this.state;
        const filteredNews = news.filter(n => n.title.toLowerCase().includes(filter.toLowerCase()) && n.category === categoryFilter);
        return (
            <div className="container">
                <SearchBar onFilter={this.onFilter.bind(this)} />
                <Filter onFilter={(category) => { this.setState({ categoryFilter: category }) }} selected={categoryFilter} />
                <ListView>
                    {filteredNews.map((newsItem) => (<ListViewItem key={newsItem.id} info={newsItem} />))}
                </ListView>
            </div>
        );
    };
};

export default MainContent;
