import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph"></div>
				</div>
				<Link to="/">
					<span>Skild</span>
				</Link>
			</div>

			<div className="actions">
				<Link to="/sig-in/$" className="btn-primary">
					<LogIn />
					Sign In
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
