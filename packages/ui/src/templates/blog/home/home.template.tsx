import { Blogs } from "@/organisms/blogs/blogs.component";
import { Footer } from "@/organisms/footer/footer.component";
import { Hero } from "@/organisms/hero/hero.component";
import { Introducing } from "@/organisms/introducing/introducing.component";
import { Timeline } from "@/organisms/timeline/timeline";
import type React from "react";

export const HomeTemplate: React.FC = () => {
	return (
		<div className="bg-white">
			<Hero />
			<Introducing />
			<Timeline />
			<Blogs />
			<Footer />
		</div>
	);
};
