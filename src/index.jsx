import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./template/layout";
import Page from "./template/page";
import { config } from "./config/config";

function Index() {
	const [pages, setPages] = useState([]);

	const url = config.url;

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`${url}/wp-json/custom/v1/all-content/page/`,
				{
					mode: "cors",
				}
			);
			const data = await response.json();
			setPages(data);
		})();
	}, [url]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout pages={pages} />}>
					{pages.map((page) => {
						if (!page.blocks) return null;
						return (
							<Route
								key={page.id}
								path={page.url}
								element={<Page blocks={page.blocks} />}
								index={page.is_homepage ? true : undefined}
							/>
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Index;
