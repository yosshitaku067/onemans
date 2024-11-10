import { Button } from "@/__generated__/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/__generated__/components/ui/dropdown-menu";
import { EarthIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const LangSelect: React.FC = () => {
	const [lang, setLang] = useState<"EN" | "日本語">("EN");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					className="flex items-center gap-2 hover:outline-none focus:outline-none"
				>
					<div className="h-8 w-8 rounded-full bg-white p-1">
						<EarthIcon className="text-secondary-foreground" />
					</div>
					<span className="font-bold text-base text-secondary">{lang}</span>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={() => {
						setLang("EN");
					}}
				>
					EN
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						setLang("日本語");
					}}
				>
					日本語
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
