import { AllButtons } from "../buttons/allButtons";

export const toReactComponentName = (fileName) => {
	return fileName
		.replace(/[-_/](.)/g, (_, char) => char.toUpperCase()) // Convert kebab-case or snake_case to camelCase
		.replace(/^(.)/, (_, char) => char.toUpperCase()); // Capitalize the first letter
};

export const determineIfExternal = (url) => {
	if (url.startsWith("http")) return true;
	if (url.startsWith("#")) return true;
	if (url.startsWith("/")) return false;
	return false;
};

export const parseRepeaterFields = (fields) => {
	if (fields.find((field) => field.field_name === "parsed_repeater"))
		return fields;

	const repeater = fields.find((field) => field.field_type === "repeater");
	if (!repeater) return fields;

	const label = repeater.field_name;

	const repeaterFields = fields.filter((field) =>
		field.field_name.includes(`${label}_`)
	);

	const repeaterArray = [];
	repeaterFields.forEach((field) => {
		const split = field.field_name.split("_");
		const index = split[1];
		const label = split[2];

		if (!repeaterArray[index]) repeaterArray[index] = {};
		repeaterArray[index][label] = field.field_value;
	});

	fields.push({
		field_name: "parsed_repeater",
		field_value: repeaterArray,
	});

	return fields;
};
