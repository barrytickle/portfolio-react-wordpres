/* eslint no-multi-str: "error" */

const modules = import.meta.glob(["../blocks/*.jsx"], { eager: true });

import { toReactComponentName } from "../app/helpers";

const components = Object.keys(modules).reduce((acc, filePath) => {
	const name = filePath.split("/").pop().replace(`.jsx`, ""); // Extract file name
	acc[toReactComponentName(name)] = modules[filePath].default;
	return acc;
}, {});

export default components;
