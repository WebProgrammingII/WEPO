import React from 'react';

/* Inline styles */
import ButtonInline from './components/Button/ButtonInline';
import PaperInline from './components/Paper/PaperInline';
import AvatarInline from './components/Avatar/AvatarInline';
import AlertInline from './components/Alert/AlertInline';

/* Radium */
import ButtonRadium from './components/Button/ButtonRadium';

import './App.css';

class App extends React.Component {
	render() {
		return (
            <div>
				<h1>Inline styles</h1>
				<hr/>
				<div>
					<h3>ButtonInline</h3>
					<ButtonInline
					 	onClick={() => {}}
						type="success">Success btn</ButtonInline>
					<ButtonInline
					 	onClick={() => {}}
						type="warning">Warning btn</ButtonInline>
					<ButtonInline
					 	onClick={() => {}}
						type="danger">Danger btn</ButtonInline>
				</div>
				<div>
					<h3>PaperInline</h3>
					<PaperInline shadowSize="small">Small</PaperInline>
					<PaperInline shadowSize="medium">Medium</PaperInline>
					<PaperInline shadowSize="large">Large</PaperInline>
				</div>
				<div>
					<h3>AvatarInline</h3>
					<AvatarInline size="small" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarInline size="medium" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarInline size="large" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
				</div>
				<div>
					<h3>AlertInline</h3>
					<AlertInline type="info" title="Info" message="Remember to brush your teeth!" />
					<AlertInline type="success" title="Success" message="Mission completed!" />
					<AlertInline type="warning" title="Warning" message="This is your last warning! Please stop your dancing." />
					<AlertInline type="danger" title="Danger" message="Buffer overflow !*(#$&*(!&(*@&!$)))" />
				</div>
				<h1>Radium styles</h1>
				<hr/>
				<div>
					<h3>ButtonRadium</h3>
					<ButtonRadium
					 	onClick={() => {}}
						type="success">Success btn</ButtonRadium>
					<ButtonRadium
					 	onClick={() => {}}
						type="warning">Warning btn</ButtonRadium>
					<ButtonRadium
					 	onClick={() => {}}
						type="danger">Danger btn</ButtonRadium>
				</div>
			</div>
        );
	}
}

export default App;
