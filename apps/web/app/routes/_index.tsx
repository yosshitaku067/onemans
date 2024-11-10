import { json, type MetaFunction } from "@remix-run/node";
import { Button } from "@repo/ui/components/ui/button";
import { useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = () => {
	return json({});
};

export default function Index() {
	const [state, setState] = useState(false);

	return (
		<div>
			<Button
				variant="secondary"
				onClick={() => {
					setState(!state);
				}}
			>
				Hello
			</Button>
			<div>{state && "hello"}</div>
		</div>
	);
}
