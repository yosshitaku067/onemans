import type { Meta, StoryObj } from "@storybook/react";
import { HomeTemplate } from "./home.template";

const meta: Meta<typeof HomeTemplate> = {
	component: () => (
		<div className="h-screen bg-white p-1">
			<HomeTemplate />
		</div>
	),
};

export default meta;

type Story = StoryObj<typeof HomeTemplate>;

export const Default: Story = {};
