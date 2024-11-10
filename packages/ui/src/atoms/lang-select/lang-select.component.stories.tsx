import type { Meta, StoryObj } from "@storybook/react";
import { LangSelect } from "./lang-select.component";

const meta: Meta<typeof LangSelect> = {
	component: () => <LangSelect />,
};

export default meta;

type Story = StoryObj<typeof LangSelect>;

export const Default: Story = {};
