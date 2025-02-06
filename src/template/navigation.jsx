import { useContext, useRef, useEffect } from "react";
import OptionsContext from "../context/OptionsContext";
import { Link } from "react-router";
import { ButtonSolidWhite } from "../buttons/button";

const determineLogo = (options) => {
	let logo;
	if (
		!options ||
		!options["siteSettings"] ||
		!options["siteSettings"]["logo_text"]
	) {
		logo = "Barry Tickle";
	} else {
		logo = options["siteSettings"]["logo_text"];
	}

	logo = logo.split(" ");
	return logo;
};

const bindLabelClick = (label, toggle) => {
	const close = label.querySelector(".close");
	const open = label.querySelector(".open");

	toggle.addEventListener("change", () => {
		if (close.classList.contains("hidden")) {
			close.classList.remove("hidden");
			open.classList.add("hidden");
		} else {
			close.classList.add("hidden");
			open.classList.remove("hidden");
		}
	});
};

function Navigation() {
	const { options, menus } = useContext(OptionsContext);

	// console.log("DOES THIS RE FIRE?");

	const logo = determineLogo(options);

	let navigation = Array.from(menus).find((menu) => menu.slug === "header") ?? {
		items: [],
	};

	const navigationToggle = useRef(null);
	const labelRef = useRef(null);

	useEffect(() => {
		if (!labelRef.current || !navigationToggle.current) return;
		bindLabelClick(labelRef.current, navigationToggle.current);
	}, []); // Runs only once when the component mounts

	return (
		<header className="bg-dark-900 sticky w-full top-0 mb-3 z-50">
			<nav className="flex items-center justify-between w-full container mx-auto md:px-4 md:py-6 max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center justify-between w-full px-4 py-6 md:w-[fit-content] md:px-0 md:py-0 bg-dark-900 relative z-50">
						<a
							className="block text-2xl font-black md:hidden lg:block group"
							href="/"
						>
							<span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">
								{logo[0]}
							</span>
							<span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">
								{logo[1]}
							</span>
						</a>
						<a
							href="/"
							className="hidden text-3xl font-black md:block lg:hidden group"
						>
							<span className="text-white transition duration-200 ease-in-out group-hover:text-dark-300">
								{logo[0][0]}
							</span>
							<span className="transition duration-200 ease-in-out text-dark-300 group-hover:text-white">
								{logo[1][0]}
							</span>
						</a>
						<a
							className="md:hidden w-auto flex items-center justify-center px-8 py-4 text-base font-semibold leading-snug transition ease-in-out bg-white rounded-full h-14 duration-250 text-dark-900 hover:text-white focus:outline-none hover:bg-dark-900 md:hidden"
							href="/contact-me"
						>
							Contact me
						</a>
						<label
							htmlFor="navigation-toggle"
							ref={labelRef}
							className="text-white cursor-pointer md:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="close h-[25px] w-[25px] hidden"
								viewBox="0 0 384 512"
							>
								<path
									fill="#ffffff"
									d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
								></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="open h-[25px] w-[25px]"
								viewBox="0 0 448 512"
							>
								<path
									fill="#ffffff"
									d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
								></path>
							</svg>
						</label>
					</div>
					<input
						type="checkbox"
						id="navigation-toggle"
						className="peer hidden"
						ref={navigationToggle}
					/>
					<div className="z-40 peer-checked:flex flex-col justify-center peer-checked:top-[80px] duration-500 fixed top-[-100vh] left-0 h-[calc(100vh-80px)] bg-dark-900 w-full md:flex md:justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base font-medium text-dark-300 md:static md:w-[fit-content] md:h-[fit-content] md:flex-row">
						{navigation.items.map((item, index) => {
							if (item.cta === "true") return;
							const { pathname } = window.location;
							const active = item.url === pathname ? "text-white" : "";
							return (
								<Link
									to={item.url}
									key={index}
									className={`block mb-4 md:mb-0 px-4 py-1 transition duration-200 ease-in-out rounded-full sm:inline-block hover:text-white hover:bg-dark-700 ${active}`}
								>
									{item.title}
								</Link>
							);
						})}
					</div>
					<div className="hidden md:block">
						{navigation.items.map((item, index) => {
							if (item.cta !== "true") return;
							return (
								<ButtonSolidWhite
									key={index}
									url={item.url}
									title={item.title}
								/>
							);
						})}
					</div>
				</div>
			</nav>
		</header>
	);
}
export default Navigation;
