import { AllButtons } from "../buttons/allButtons";

export const buttonLooper = (buttons) => {
	return buttons.map((button, index) => {
		const Component = AllButtons[button.type];
		const { link } = button;
		return <Component key={index} title={link.title} url={link.url} />;
	});
};
