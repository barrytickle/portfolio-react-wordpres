import PropTypes from "prop-types";
import components from "./importBlocks"; // Adjust the path accordingly
import { toReactComponentName } from "../app/helpers";
import Navigation from "./navigation";

const Page = ({ blocks }) => {
	console.log("comp", components);
	return (
		<>
			<Navigation />
			{blocks.map((block, index) => {
				const name = toReactComponentName(block.block_name);
				const Component = components[name];
				if (!Component)
					return (
						<>
							Component not found : {name}, looking for{" "}
							{block.block_name.replace("/", "-")}.jsx
						</>
					);
				return <Component key={index} fields={block.fields} />;
			})}
		</>
	);
};

Page.propTypes = {
	blocks: PropTypes.array.isRequired,
};

export default Page;
