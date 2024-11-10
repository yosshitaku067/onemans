import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../__generated__/components/ui/button";

const meta: Meta<typeof Button> = {
	component: () => <Button variant="outline">Button</Button>,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
