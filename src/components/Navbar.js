import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link to="/trackodoro/settimer/">Set Timer</Link> /
			<Link to="/trackodoro/timer/">Timer</Link>
		</nav>
	);
};

export default Header;
