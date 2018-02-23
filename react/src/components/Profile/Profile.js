import React from 'react';
import TextInput from '../TextInput/TextInput';

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
    render() {
        const { fullName, img, imgUrl } = this.state;
        return (
            <div>
                <h1>Edit profile</h1>
                <form action="">
                    <TextInput
                        name="fullName"
                        value={fullName}
                        onChange={(e) => this.onInputChange(e)}
                        validate={val => !val ? 'Full name is required' : ''} />
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
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        )
    };
};

export default Profile;
