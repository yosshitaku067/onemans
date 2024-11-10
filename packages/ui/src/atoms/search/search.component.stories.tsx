import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./search.component";

const meta: Meta<typeof Search> = {
	component: () => (
		<div className="h-screen bg-white p-1">
			<Search />
		</div>
	),
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
