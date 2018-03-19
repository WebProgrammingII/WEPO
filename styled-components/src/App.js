import React from 'react';
import {Alert, Sunset, Modal} from 'al-infinitymodules';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		setInterval(() => {
			const { degree } = this.state;
			this.setState({ degree: degree === 180 ? 0 : degree + 1 })
		}, 30);
	}
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			degree: 0
		};
	}
	render() {
		const { isModalOpen, degree } = this.state;
		return (<div>
			<Alert type="info">
				<Alert.Title>Title</Alert.Title>
				<Alert.Text>Text</Alert.Text>
			</Alert>
			<Alert type="success">
				<Alert.Title>Title</Alert.Title>
				<Alert.Text>Text</Alert.Text>
			</Alert>
			<Alert type="warning">
				<Alert.Title>Title</Alert.Title>
				<Alert.Text>Text</Alert.Text>
			</Alert>
			<Alert type="danger">
				<Alert.Title>Title</Alert.Title>
				<Alert.Text>Text</Alert.Text>
			</Alert>
			<Sunset degree={degree}/>
			<button onClick={() => this.setState({isModalOpen: true})}>Open Modal!</button>
			<Modal isOpen={isModalOpen} onClose={() => this.setState({isModalOpen: false})}>
				<Modal.Title>Title</Modal.Title>
				<Modal.Body>Body</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>);
	}
}

export default App;
