import type { Meta, StoryObj } from "@storybook/react";
import { Introducing } from "./introducing.component";

const meta: Meta<typeof Introducing> = {
	component: () => <Introducing />,
};

export default meta;

type Story = StoryObj<typeof Introducing>;

export const Default: Story = {};
