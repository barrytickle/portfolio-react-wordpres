import { createContext } from "react";
const OptionsContext = createContext({
	options: {},
	setOptions: () => {},
	menus: {},
	setMenus: () => {},
});

export default OptionsContext;
