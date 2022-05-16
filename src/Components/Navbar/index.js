import React from 'react';
import { Navbarseaction, Logo, Logotext, UlList, ListItem, Achor ,LinkCss } from './style.js';
import Btnicon from './btnicon.js';


const Navbar = () => {
	return (
		<Navbarseaction>
			<div className="container">
				<Logo>
					<Logotext>Ultra Profile</Logotext>
				</Logo>
                <Btnicon />
				<UlList>
					<ListItem>
						<LinkCss to="/ulta-1 /">Home</LinkCss>
					</ListItem>
					<ListItem>
						<Achor href="#Work">Work</Achor>
					</ListItem>
					<ListItem>
						<Achor href="#">Portfolio</Achor>
					</ListItem>
					<ListItem>
						<Achor href="#">Resume</Achor>
					</ListItem>
					<ListItem>
						<Achor href="#">About</Achor>
					</ListItem>
					<ListItem>
						<LinkCss to="/ulta-1/Contact">Contact</LinkCss>
					</ListItem>
				</UlList>
			</div>
		</Navbarseaction>
	);
};
export default Navbar;
