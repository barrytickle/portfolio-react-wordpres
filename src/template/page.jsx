import PropTypes from "prop-types";
import components from "./importBlocks"; // Adjust the path accordingly
import { toReactComponentName } from "../app/helpers";
import Navigation from "./navigation";
import { FieldFinder } from "../app/fieldFinder";

const Page = ({ blocks }) => {
	return (
		<>
			<Navigation />
			{blocks.map((block, index) => {
				const name = toReactComponentName(block.block_name);
				if (block.block_name.includes("acf/")) {
					const Component = components[name];
					if (!Component)
						return (
							<>
								Component not found : {name}, looking for{" "}
								{block.block_name.replace("/", "-")}.jsx
							</>
						);
					return (
						<Component key={index} fields={new FieldFinder(block.fields)} />
					);
				}
			})}
		</>
	);
};

Page.propTypes = {
	blocks: PropTypes.array.isRequired,
};

export default Page;
