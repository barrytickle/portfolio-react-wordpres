const AcfServices = ({ fields }) => {
	return (
		<section className="px-4 py-10 md:py-12 bg-dark-800 sm:px-6 lg:px-8">
			<div className="max-w-xl mx-auto text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
				<p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
					What do I do?
				</p>
				<div className="grid w-full gap-6 mt-6 lg:grid-cols-5">
					<div className="lg:col-span-3">
						<h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
							I create digital products which help you stay modern
						</h2>
					</div>
					<div className="lg:col-span-2">
						<p className="text-xl text-dark-300">
							Three key features that keep your website up to date and in
							control
						</p>
					</div>
				</div>
			</div>

			<div className="grid justify-center w-full gap-12 mx-auto mt-12 lg:grid-cols-2 lg:gap-8 lg:mt-16 lg:max-w-screen-xl xl:max-w-screen-xl lg:justify-start">
				<div>
					<div className="w-full">
						<div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
							<div className="relative flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
								<div className="text-center sm:flex sm:text-left">
									<div className="w-full sm:w-1/5">
										<div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
											<svg
												className="w-6 h-6"
												xmlns="http://www.w3.org/2000/svg"
												width="44"
												height="44"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<rect x="8" y="8" width="8" height="8" rx="1" />
												<line x1="3" y1="8" x2="4" y2="8" />
												<line x1="3" y1="16" x2="4" y2="16" />
												<line x1="8" y1="3" x2="8" y2="4" />
												<line x1="16" y1="3" x2="16" y2="4" />
												<line x1="20" y1="8" x2="21" y2="8" />
												<line x1="20" y1="16" x2="21" y2="16" />
												<line x1="8" y1="20" x2="8" y2="21" />
												<line x1="16" y1="20" x2="16" y2="21" />
											</svg>
										</div>
									</div>
									<div className="w-full mt-3 sm:mt-0">
										<h5 className="text-lg font-semibold text-white">
											Web Design
										</h5>
										<p className="mt-1 text-base text-dark-300">
											It begins at the design stage, where we see your initial
											idea come to life in a prototype format, allowing you to
											see how your product will look at various screen sizes.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full mt-8 lg:mt-5 xl:mt-8 2xl:mt-10">
					<div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
						<div className="flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
							<div className="text-center sm:flex sm:text-left">
								<div className="w-full sm:w-1/5">
									<div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											width="44"
											height="44"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<polyline points="7 8 3 12 7 16" />
											<polyline points="17 8 21 12 17 16" />
											<line x1="14" y1="4" x2="10" y2="20" />
										</svg>
									</div>
								</div>
								<div className="w-full mt-3 sm:mt-0">
									<h5 className="text-lg font-semibold text-white">
										Web Development
									</h5>
									<p className="mt-1 text-base text-dark-300">
										Then, I bring the design to life, programming interactivity,
										managing SEO and accessibility, ensuring that the product
										you wanted comes to life for your audience.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full mt-8 lg:mt-5 xl:mt-8 2xl:mt-10">
					<div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
						<div className="flex w-full px-8 py-6 shadow-xl rounded-3xl bg-dark-700 sm:px-10">
							<div className="text-center sm:flex sm:text-left">
								<div className="w-full sm:w-1/5">
									<div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl text-dark-300 sm:mx-0 from-dark-800 to-dark-900">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											width="44"
											height="44"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
										</svg>
									</div>
								</div>
								<div className="w-full mt-3 sm:mt-0">
									<h5 className="text-lg font-semibold text-white">
										Maintenance & Optimization
									</h5>
									<p className="mt-1 text-base text-dark-300">
										Bugs can appear anytime. Unfortunately, it's impossible to
										catch them all, which is why maintenance plays an important
										role after production.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center max-w-screen-md lg:max-w-full">
				<div className="grid h-full grid-flow-col grid-rows-2 gap-4">
					<img
						src="image-url.jpg"
						alt="Office building"
						className="object-cover w-full h-full rounded-3xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default AcfServices;
