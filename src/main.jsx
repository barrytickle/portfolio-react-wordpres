import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./index.jsx";
import { OptionsProvider } from "./context/OptionsProvider.jsx";

console.log("root");
createRoot(document.getElementById("root")).render(
	<OptionsProvider>
		<Index />
	</OptionsProvider>
);
