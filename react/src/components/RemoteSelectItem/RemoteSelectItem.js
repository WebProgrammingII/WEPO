import React from 'react';
import { PropTypes } from 'prop-types';

class RemoteSelectItem extends React.Component {
    componentDidMount() {
        this.populateData(this.props);
    }
    componentWillReceiveProps(newProps) {
        this.populateData(newProps);
    }
    populateData(props) {
        const { disabled, populationMethod } = props;
        if (!disabled) {
            populationMethod().then(data => {
                this.setState({ selectItems: data });
            });
        }
    }
    constructor(props) {
        super(props);
        this.state = { selectItems: [] };
    }
    render() {
        const { selectItems } = this.state;
        const { value, name, onSelect, defaultOption, disabled } = this.props;
        return (
            <select className="select" name={name} value={value} onChange={onSelect} disabled={disabled}>
                <option value="">{defaultOption}</option>
                {selectItems.map(s => ( <option key={s.value} value={s.value}>{s.display}</option> ))}
            </select>
        );
    }
};

RemoteSelectItem.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    populationMethod: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

RemoteSelectItem.defaultProps = {
    defaultOption: '-- Nothing selected --',
    disabled: false
};

export default RemoteSelectItem;
