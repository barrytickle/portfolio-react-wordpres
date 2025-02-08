import PropTypes from "prop-types";

const AcfServices = ({ fields }) => {
	const tag = fields.findField("tag");
	const title = fields.findField("title");
	const subTitle = fields.findField("sub_title");
	const images = fields.findField("images");
	const services = fields.findField("parsed_repeater");

	console.log("IMAGES", images);

	return (
		<section className="px-4 py-10 md:py-12 bg-dark-800 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<div className="max-w-xl mx-auto text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl mb-12">
					<p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
						{tag}
					</p>
					<div className="grid w-full gap-6 mt-6 lg:grid-cols-5">
						<div className="lg:col-span-3">
							<h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
								{title}
							</h2>
						</div>
						<div className="lg:col-span-2">
							<p className="text-xl text-dark-300">{subTitle}</p>
						</div>
					</div>
				</div>

				<div className="flex justify-between px-1 flex-col-reverse lg:flex-row">
					<div className="flex flex-col lg:w-1/2 lg:pr-12 xl:pl-12 justify-center w-full mx-auto -mt-12 lg:mt-0 gap-6 lg:gap-8 ">
						{services.map((service, index) => {
							console.log("service", service);
							return (
								<div className="w-full" key={index}>
									<div
										className={`max-w-lg mx-auto lg:mr-auto  ${
											index === 1 ? "lg:mr-0" : "xl:mx-auto"
										}`}
									>
										<div className="relative flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
											<div className="text-center sm:flex sm:text-left">
												<div className="w-fg sm:w-1/5">
													<div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
														<img className="w-6 h-6" src={service.icon.url} />
													</div>
												</div>
												<div className="w-full mt-3 sm:mt-0">
													<h5 className="text-lg font-semibold text-white">
														{service.title.field_value}
													</h5>
													<p className="mt-1 text-base text-dark-300">
														{service.description}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex mb-6 lg:mb-0 items-center lg:w-1/2 justify-center max-w-screen-md lg:max-w-full">
						<div className="grid grid-cols-2 grid-rows-2 gap-6 items-center justify-center max-w-screen-md  lg:mt-0 lg:max-w-full h-[620px]">
							<div className="h-full col-span-1 row-span-2 grid-flow-col grid-rows-2 gap-4">
								<img
									src={images[0].url}
									alt="Office building"
									className="object-cover w-full h-full rounded-3xl"
								/>
							</div>
							<div className="h-full   col-start-2 row-span-1 grid-flow-col grid-rows-2 gap-4">
								<img
									src={images[1].url}
									alt="Office building"
									className="object-cover w-full h-full rounded-3xl"
								/>
							</div>
							<div className="h-full   col-start-2 row-start-2 grid-flow-col grid-rows-2 gap-4">
								<img
									src={images[2].url}
									alt="Office building"
									className="object-cover w-full h-full rounded-3xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

AcfServices.propTypes = {
	fields: PropTypes.object.isRequired,
};

export default AcfServices;
