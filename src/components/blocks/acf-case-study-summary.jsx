import PropTypes from "prop-types";
import { Button } from "../../buttons/button"; // Adjust the path as necessary
import CaseStudyBlock from "../caseStudyBlock";

const AcfCaseStudySummary = ({ fields }) => {
	console.log(fields);
	const tag = fields.findField("tag");
	const title = fields.findField("title");
	const cta_link = fields.findField("cta_link");
	const cta_type = fields.findField("cta_type");
	const case_studies = fields.findField("parsed_repeater")?.studies;

	console.log(case_studies);

	return (
		<div className="container mx-auto">
			<div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl mb-16">
				<p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
					{tag}
				</p>
				<h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
					{title}
				</h2>
				<Button {...cta_link} type={cta_type} className="w-fit mx-auto mt-14" />
			</div>
			{case_studies &&
				case_studies.map((study, index) => {
					const isEvenOrZero = index % 2 === 0;
					return (
						<CaseStudyBlock
							fields={study}
							key={index}
							even={isEvenOrZero}
							className="mb-12 lg:mb-56"
						/>
					);
				})}
		</div>
	);
};

AcfCaseStudySummary.propTypes = {
	fields: PropTypes.shape({
		findField: PropTypes.func.isRequired,
	}).isRequired,
};

export default AcfCaseStudySummary;
