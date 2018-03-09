import React from 'react';

/* Inline styles */
import ButtonInline from './components/Button/ButtonInline';
import PaperInline from './components/Paper/PaperInline';
import AvatarInline from './components/Avatar/AvatarInline';
import AlertInline from './components/Alert/AlertInline';

/* Radium */
import ButtonRadium from './components/Button/ButtonRadium';
import PaperRadium from './components/Paper/PaperRadium';
import AvatarRadium from './components/Avatar/AvatarRadium';
import AlertRadium from './components/Alert/AlertRadium';

/* Multiple Stylesheets */
import ButtonMSS from './components/Button/ButtonMSS';
import PaperMSS from './components/Paper/PaperMSS';
import AvatarMSS from './components/Avatar/AvatarMSS';
import AlertMSS from './components/Alert/AlertMSS';

/* CSS Modules */
import ButtonCM from './components/Button/ButtonCM';
import PaperCM from './components/Paper/PaperCM';
import AvatarCM from './components/Avatar/AvatarCM';

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
				<div>
					<h3>PaperRadium</h3>
					<PaperRadium shadowSize="small">Small</PaperRadium>
					<PaperRadium shadowSize="medium">Medium</PaperRadium>
					<PaperRadium shadowSize="large">Large</PaperRadium>
				</div>
				<div>
					<h3>AvatarRadium</h3>
					<AvatarRadium size="small" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarRadium size="medium" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarRadium size="large" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
				</div>
				<div>
					<h3>AlertRadium</h3>
					<AlertRadium type="info" title="Info" message="Remember to brush your teeth!" />
					<AlertRadium type="success" title="Success" message="Mission completed!" />
					<AlertRadium type="warning" title="Warning" message="This is your last warning! Please stop your dancing." />
					<AlertRadium type="danger" title="Danger" message="Buffer overflow !*(#$&*(!&(*@&!$)))" />
				</div>
				<h1>Multiple stylesheets</h1>
				<hr />
				<div>
					<h3>ButtonMSS</h3>
					<ButtonMSS
					 	onClick={() => {}}
						type="success">Success btn</ButtonMSS>
					<ButtonMSS
					 	onClick={() => {}}
						type="warning">Warning btn</ButtonMSS>
					<ButtonMSS
					 	onClick={() => {}}
						type="danger">Danger btn</ButtonMSS>
				</div>
				<div>
					<h3>PaperMSS</h3>
					<PaperMSS shadowSize="small">Small</PaperMSS>
					<PaperMSS shadowSize="medium">Medium</PaperMSS>
					<PaperMSS shadowSize="large">Large</PaperMSS>
				</div>
				<div>
					<h3>AvatarMSS</h3>
					<AvatarMSS size="small" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarMSS size="medium" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarMSS size="large" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
				</div>
				<div>
					<h3>AlertMSS</h3>
					<AlertMSS type="info" title="Info" message="Remember to brush your teeth!" />
					<AlertMSS type="success" title="Success" message="Mission completed!" />
					<AlertMSS type="warning" title="Warning" message="This is your last warning! Please stop your dancing." />
					<AlertMSS type="danger" title="Danger" message="Buffer overflow !*(#$&*(!&(*@&!$)))" />
				</div>
				<h1>CSS Modules</h1>
				<hr />
				<div>
					<h3>ButtonCM</h3>
					<ButtonCM
					 	onClick={() => {}}
						type="success">Success btn</ButtonCM>
					<ButtonCM
					 	onClick={() => {}}
						type="warning">Warning btn</ButtonCM>
					<ButtonCM
					 	onClick={() => {}}
						type="danger">Danger btn</ButtonCM>
				</div>
				<div>
					<h3>PaperCM</h3>
					<PaperCM shadowSize="small">Small</PaperCM>
					<PaperCM shadowSize="medium">Medium</PaperCM>
					<PaperCM shadowSize="large">Large</PaperCM>
				</div>
				<div>
					<h3>AvatarCM</h3>
					<AvatarCM size="small" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarCM size="medium" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
					<AvatarCM size="large" avatarUrl="https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2017/12/legiao_hRGKrQAq8OpUDYbx0kX35aHN2dVB_ueIEsgCtyM7Jl.jpg.jpeg" />
				</div>
			</div>
        );
	}
}

export default App;
