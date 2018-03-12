import React from 'react';
import StyledComponents from './components/StyledComponents/StyledComponents';
import { ThemeProvider } from 'styled-components';
import './App.css';

const { Square, Rectangle, CurvedSquare, Button, BigButton, Yoyo, MobileMenu } = StyledComponents;

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={{
				baseWidth: 200,
				baseHeight: 200,
				baseColor: 'gray',
				successColor: 'green',
				warningColor: 'orange',
				dangerColor: 'red'
			}}>
	            <div>
					<h1>Styled components</h1>
					<hr/>
					<div>
						<h3>Square</h3>
						<Square />
					</div>
					<div>
						<h3>Rectangle</h3>
						<Rectangle />
						<Rectangle height={200} width={200} />
						<Rectangle height={300} width={100} />
					</div>
					<div>
						<h3>CurvedSquare</h3>
						<CurvedSquare />
					</div>
					<div>
						<h3>Button</h3>
						<Button onClick={() => {}}>Default Btn</Button>
						<Button type="success" onClick={() => {}}>Success Btn</Button>
						<Button type="warning" onClick={() => {}}>Warning Btn</Button>
						<Button type="danger" onClick={() => {}}>Danger Btn</Button>
					</div>
					<div>
						<h3>BigButton</h3>
						<BigButton onClick={() => {}}>Default Btn</BigButton>
						<BigButton type="success" onClick={() => {}}>Success Btn</BigButton>
						<BigButton type="warning" onClick={() => {}}>Warning Btn</BigButton>
						<BigButton type="danger" onClick={() => {}}>Danger Btn</BigButton>
					</div>
					<div>
						<h3>Yoyo</h3>

					</div>
					<div>
						<h3>MobileMenu</h3>
						<MobileMenu />
					</div>
				</div>
			</ThemeProvider>
        );
	}
}

export default App;
