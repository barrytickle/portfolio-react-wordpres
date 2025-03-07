import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { determineIfExternal } from "../app/helpers";

const types = {
	url: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
};

export const ButtonSolidWhite = ({ url, title, className }) => {
	const external = determineIfExternal(url);
	if (!external)
		return (
			<Link
				to={url || "/"}
				className={`flex items-center justify-center px-8 py-4 text-base font-semibold leading-snug transition ease-in-out bg-white rounded-full h-14 duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-dark-600 ${className}`}
			>
				{title || "Button"}
			</Link>
		);

	if (external)
		return (
			<a
				href={url}
				className={`flex items-center justify-center px-8 py-4 text-base font-semibold leading-snug transition ease-in-out bg-white rounded-full h-14 duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-dark-600 ${className}`}
			>
				{title}
			</a>
		);
};

export const ButtonAnimated = ({ url, title, className }) => {
	const external = determineIfExternal(url);
	if (!external)
		return (
			<Link
				to={String(url) || "/"}
				className={`relative flex items-center justify-center w-auto px-8 ml-0 text-base font-medium leading-snug text-white h-14 sm:mt-0 group mt-2 md:mt-0 ${className}`}
			>
				<span className="absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-gradient-to-r duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full"></span>
				<span className="relative z-20">{title || "Button"}</span>
			</Link>
		);

	if (external)
		return (
			<a
				className={`relative flex items-center justify-center w-auto px-8 ml-0 text-base font-medium leading-snug text-white h-14 sm:mt-0 group mt-2 md:mt-0 ${className}`}
				to={url}
			>
				<span className="absolute top-0 left-0 z-10 block w-full h-full transition-all ease-in-out rounded-full bg-gradient-to-r duration-250 from-dark-800 to-dark-900 md:w-14 md:group-hover:w-full"></span>
				<span className="relative z-20">{title}</span>
			</a>
		);
};

export const Button = ({ url, title, type, className }) => {
	if (type === "solid")
		return <ButtonSolidWhite url={url} title={title} className={className} />;
	if (type === "animated")
		return <ButtonAnimated url={url} title={title} className={className} />;
};

Button.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
};
ButtonSolidWhite.propTypes = types;
ButtonAnimated.propTypes = types;
