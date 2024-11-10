import type { Meta, StoryObj } from "@storybook/react";
import { Blogs } from "./blogs.component";

const meta: Meta<typeof Blogs> = {
	component: () => <Blogs />,
};

export default meta;

type Story = StoryObj<typeof Blogs>;

export const Default: Story = {};
