import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                fullName: '',
                email: '',
                address: '',
                telephone: '',
                country: '',
                region: '',
                city: ''
            }
        };
    }
    render() {
        return <form action=""></form>;
    }
};

export default SignupForm;
