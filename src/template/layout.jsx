import { Outlet, Link } from "react-router-dom";
import PropTypes from "prop-types";

const Layout = (props) => {
	const { pages } = props;
	if (!pages) return <></>;

	console.log(pages);
	return (
		<>
			<nav>
				<ul>
					{pages.map((page) => (
						<li key={page.id}>
							<Link to={page.url}>{page.title}</Link>
						</li>
					))}
				</ul>
			</nav>

			<Outlet />
		</>
	);
};
Layout.propTypes = {
	pages: PropTypes.array.isRequired,
};

export default Layout;
