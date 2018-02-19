import React from 'react';
import { PropTypes } from 'prop-types';

class RemoteSelectItem extends React.Component {
    render() {
        const { value, name, onSelect, defaultOption } = this.props;
        return (
            <select className="select" name={name} value={value} onChange={onSelect}>
                <option value="">{defaultOption}</option>
            </select>
        );
    }
};

RemoteSelectItem.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    defaultOption: PropTypes.string
};

RemoteSelectItem.defaultProps = {
    defaultOption: '-- Nothing selected --'
};

export default RemoteSelectItem;
