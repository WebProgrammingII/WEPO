import React from 'react';
import TextInput from '../TextInput/TextInput';
import CountrySelection from '../CountrySelection/CountrySelection';
import toastr from 'toastr';
import validator from 'validator';
import { connect } from 'react-redux';

const initialState = {
    fields: {
        fullName: '',
        telephone: '',
        email: '',
        address: '',
        city: '',
        region: '',
        country: ''
    }
};

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
    onInput(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };
    onFormSubmit(e) {
        e.preventDefault();
        const { fullName, telephone, email, address, region, country } = this.state.fields;
        if (fullName === '' || telephone === '' || !validator.isEmail(email) || address === '' || region === '' || country === '') { return false; }
        console.log(this.state.fields);
        this.setState(initialState);
        toastr.success('Form was successfully submitted', 'Success!');
    }
    render() {
        const { fullName, telephone, email, address } = this.state.fields;
        const { headings, formValidation, buttons } = this.props.language;
        return (
            <div>
                <h1>{headings.signupNow}</h1>
                <form action="" method="get" onSubmit={(e) => this.onFormSubmit(e)}>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="fullName"
                        value={fullName}
                        validate={val => !val ? formValidation.fullNameReq : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="telephone"
                        value={telephone}
                        validate={val => !val ? formValidation.telephoneReq : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="email"
                        value={email}
                        validate={val => !validator.isEmail(val) ? formValidation.emailFormat : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="address"
                        value={address}
                        validate={val => !val ? formValidation.addressReq : ''} />
                    <CountrySelection onCountrySelection={e => this.onInput(e)} />
                    <button type="submit" className="btn">{buttons.submit}</button>
                </form>
            </div>
        )
    };
};

export default connect(({ language }) => { return { language }; })(SignupForm);
