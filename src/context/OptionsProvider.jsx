import { useEffect, useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import OptionsContext from "./OptionsContext";
import { config } from "../config/config";

export const OptionsProvider = ({ children }) => {
	const [options, setOptions] = useState({});
	const [menus, setMenus] = useState({});
	const hasFetched = useRef(false);

	useEffect(() => {
		if (hasFetched.current) return;
		hasFetched.current = true;

		(async () => {
			try {
				const response = await fetch(
					`${config.url}/wp-json/custom/v1/options/`,
					{ mode: "cors" }
				);
				const data = await response.json();
				setOptions(data.fields);

				const response2 = await fetch(
					`${config.url}/wp-json/custom/v1/menus/`,
					{ mode: "cors" }
				);
				const data2 = await response2.json();
				setMenus(data2);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// 🔹 Use `useMemo` to avoid unnecessary re-renders
	const contextValue = useMemo(
		() => ({ options, setOptions, menus, setMenus }),
		[options, menus]
	);

	console.log("OptionsProvider", contextValue);

	return (
		<OptionsContext.Provider value={contextValue}>
			{children}
		</OptionsContext.Provider>
	);
};

OptionsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
