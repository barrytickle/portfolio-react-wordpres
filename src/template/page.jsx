import PropTypes from "prop-types";
import components from "./importBlocks"; // Adjust the path accordingly
import { toReactComponentName } from "../app/helpers";

const Page = (props) => {
	const { blocks } = props;
	return (
		<>
			{blocks.map((block, index) => {
				const name = toReactComponentName(block.block_name);
				const Component = components[name];
				return <Component key={index} fields={block.fields} />;
			})}
		</>
	);
};

Page.propTypes = {
	blocks: PropTypes.array.isRequired,
};

export default Page;
