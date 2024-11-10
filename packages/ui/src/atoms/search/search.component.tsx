import { SearchIcon } from "lucide-react";
import type React from "react";

export const Search: React.FC = () => {
	return (
		<div className="relative">
			<div className="absolute top-2 right-4">
				<button type="button">
					<SearchIcon className="text-primary-foreground" />
				</button>
			</div>
			<input
				className="h-10 w-full rounded-md border border-none bg-background/40 px-3 py-2 text-primary-foreground outline-none placeholder:text-primary-foreground focus:outline-0"
				type="text"
				placeholder="Type to search..."
			/>
		</div>
	);
};
