export const toReactComponentName = (fileName) => {
	return fileName
		.replace(/[-_/](.)/g, (_, char) => char.toUpperCase()) // Convert kebab-case or snake_case to camelCase
		.replace(/^(.)/, (_, char) => char.toUpperCase()); // Capitalize the first letter
};
