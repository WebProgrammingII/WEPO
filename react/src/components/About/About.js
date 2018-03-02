import React from 'react';
import { connect } from 'react-redux';

const About = ({ language }) => {
    const { headings } = language;
    return (
        <div>
            <h2>{headings.aboutUs}</h2>
            <p>{language.static.aboutUs}</p>
        </div>
    )
};

export default connect(({ language }) => { return { language }; })(About);
