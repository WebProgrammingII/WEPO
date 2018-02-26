import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        const { name, imgUrl } = this.props.user;
        return (
            <footer className="footer">
                <div className="footer-section image-section">
                    { imgUrl ? <img src={imgUrl} alt="Profile image" /> : <noscript></noscript> }
                </div>
                <div className="footer-section name-section">
                    <p>{name}</p>
                </div>
            </footer>
        );
    };
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Footer);
