import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const Layout = (props) => {
	const { pages } = props;
	if (!pages) return <></>;
	return (
		<main className="bg-dark-900 text-white">
			<Outlet />
		</main>
	);
};
Layout.propTypes = {
	pages: PropTypes.array.isRequired,
};

export default Layout;
