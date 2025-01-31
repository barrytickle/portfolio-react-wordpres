import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./template/layout";
import Page from "./template/page";

const url = "http://admin.local/barrytickle/";

function Index() {
	const [pages, setPages] = useState([]);

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
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout pages={pages} />}>
					{pages.map((page) => (
						<Route
							key={page.id}
							path={page.slug}
							element={<Page blocks={page.blocks} />}
							index={page.is_homepage ? true : undefined}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Index;
