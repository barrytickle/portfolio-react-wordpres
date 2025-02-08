import PropTypes from "prop-types";
import { FieldFinder } from "../app/fieldFinder"; // Adjust the import path as necessary
import { Button } from "../buttons/button";

const CaseStudyBlock = ({ fields, even, className }) => {
	const block = fields.blocks.find((block) =>
		block.block_name.includes("case-study-hero")
	);
	if (!block) {
		console.log("Unable to find case study hero on case study:", fields.title);
		return <></>;
	}

	const hero = new FieldFinder(block.fields);
	const url = fields.url;
	const image = fields.featured_image;

	const description = hero.findField("description");
	const website = hero.findField("website");

	return (
		<div
			className={`relative max-w-lg mx-auto lg:max-w-none lg:mx-none ${className}`}
		>
			<div
				className={`relative w-full h-64 bg-center shadow-xl lg:rounded-3xl rounded-t-3xl lg:pt-[46%] lg:w-[90%] lg:h-full z-0 ${
					even ? "lg:ml-[10%]" : ""
				}`}
			>
				<img
					src={image}
					alt={`Image of client ${fields.title}`}
					className="absolute inset-0 object-cover object-center w-full h-full lg:rounded-3xl rounded-t-3xl"
				/>
				<p className="inline-flex relative items-center justify-center px-6 z-20 py-2 mt-4 ml-6 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r sm:ml-8 lg:hidden from-dark-800 to-dark-900">
					Website
				</p>
			</div>
			<div
				className={`relative bottom-0 ${
					even ? "right-0" : "left-0"
				} z-20 block w-full p-6 shadow-xl lg:rounded-3xl rounded-b-3xl sm:p-8 lg:p-12 bg-dark-700 lg:absolute lg:-bottom-25 lg:w-1/3 lg:max-w-[450px] h-fit`}
			>
				<div className="flex flex-col lg:justify-between  ">
					<div className="hidden lg:block">
						<p className="inline-flex items-center justify-center px-6 py-2 text-xs font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900 mb-6">
							Website
						</p>
					</div>
					<div className="flex flex-wrap w-full">
						<h3 className="text-3xl font-bold text-white lg:text-4xl">
							{fields.title}
						</h3>
						<p className="mt-2 text-base lg:mt-4 text-dark-300 md:text-lg my-12">
							{description}
						</p>
					</div>
					<div className="mt-8 xl:mt-4 flex gap-4">
						<Button url={website} title="Visit Website" type="solid" />
						<Button url={url} title="Case Study" type="animated" />
					</div>
				</div>
			</div>
		</div>
	);
};
CaseStudyBlock.propTypes = {
	className: PropTypes.string,
	fields: PropTypes.shape({
		blocks: PropTypes.arrayOf(
			PropTypes.shape({
				block_name: PropTypes.string.isRequired,
			})
		).isRequired,
		title: PropTypes.string.isRequired,
		featured_image: PropTypes.string.isRequired,
	}).isRequired,
	even: PropTypes.bool,
};

export default CaseStudyBlock;
