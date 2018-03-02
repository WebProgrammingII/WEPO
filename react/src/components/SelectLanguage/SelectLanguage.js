import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/actions';

const SelectLanguage = ({ changeLanguage }) => {
    return (
        <div className="language-wrapper">
            <div className="flag-icon" onClick={() => changeLanguage('en')}>
                <img src="../../../resources/flag_en.png" alt="Change to english"/>
            </div>
            <div className="flag-icon" onClick={() => changeLanguage('is')}>
                <img src="../../../resources/flag_is.png" alt="Change to icelandic"/>
            </div>
        </div>
    );
};

export default connect(null, { changeLanguage })(SelectLanguage);
