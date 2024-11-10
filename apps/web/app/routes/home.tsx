import { json, type MetaFunction } from "@remix-run/node";
import { HomeTemplate } from "@repo/ui/templates";
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

export default function Home() {
	const [state, setState] = useState(false);

	return <HomeTemplate />;
}
