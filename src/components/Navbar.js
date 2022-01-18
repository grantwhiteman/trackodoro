import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link to="/trackodoro/set/" className='btn' style={{backgroundColor: 'blue'}}>Set Timer</Link>  
			<Link to="/trackodoro/timer/" className='btn' style={{backgroundColor: 'green'}}>Timer</Link>  
			<Link to="/trackodoro/break/" className='btn' style={{backgroundColor: 'orange'}}>Break</Link>
		</nav>
	);
};

export default Header;
