
import React from 'react';
import Radium from 'radium';

const styles = {
    both: {
        display: 'inline-block'
    },
    one: {
        ':hover': {
            background: 'blue'
        }
    },
    two: {
        ':hover': {
            background: 'red'
        }
    }
}

const Paragraph = () => {
    return (
        <div>
            <p key="one" style={[ styles.both, styles.one ]}></p>
            <p key="two" style={[ styles.both, styles.two ]}></p>
        </div>
    )
};

export default Radium(Paragraph);
