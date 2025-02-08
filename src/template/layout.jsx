import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import CursorDot from "./cursorDot";

const Layout = (props) => {
	const { pages } = props;
	if (!pages) return <></>;
	return (
		<main className="bg-dark-900 text-white">
			<CursorDot />
			<Outlet />
		</main>
	);
};
Layout.propTypes = {
	pages: PropTypes.array.isRequired,
};

export default Layout;
