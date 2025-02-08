import { createRoot } from "react-dom/client";
import "./index.scss";
import Index from "./index.jsx";
import { OptionsProvider } from "./context/OptionsProvider.jsx";

createRoot(document.getElementById("root")).render(
	<OptionsProvider>
		<Index />
	</OptionsProvider>
);
