import React from 'react';
import TextInput from '../TextInput/TextInput';
import { updateUserInfo } from '../../actions/actions';
import { connect } from 'react-redux';
import toastr from 'toastr';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fullName: '', img: '', imgUrl: '' };
    }
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    previewImage(e) {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.addEventListener('load', () => {
            this.setState({ imgUrl: reader.result });
        });

        reader.readAsDataURL(file);
    }
    onFormSubmit(e) {
        e.preventDefault();
        const { updateUserInfo } = this.props;
        const { fullName, imgUrl } = this.state;
        updateUserInfo(fullName, imgUrl);
        toastr.success('Profile was successfully submitted!', 'Success!');
    }
    render() {
        const { fullName, img, imgUrl } = this.state;
        const { headings, formValidation, buttons } = this.props.language;
        return (
            <div>
                <h1>{headings.editProfile}</h1>
                <form action="" onSubmit={(e) => this.onFormSubmit(e)}>
                    <TextInput
                        name="fullName"
                        value={fullName}
                        onChange={(e) => this.onInputChange(e)}
                        validate={val => !val ? formValidation.fullNameReq : ''} />
                    <TextInput
                        type="file"
                        name="img"
                        value={img}
                        onChange={(e) => {
                            this.onInputChange(e);
                            this.previewImage(e);
                        }} />
                    <div className="image-preview center">
                        <img src={imgUrl} alt=""/>
                    </div>
                    <button type="submit" className="btn">{buttons.submit}</button>
                </form>
            </div>
        )
    };
};

export default connect(({ language }) => { return { language } }, { updateUserInfo })(Profile);
