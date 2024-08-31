import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, userEvent, within, expect } from '@storybook/test';

import { EmButton } from 'element-minus';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

type Story = StoryObj<typeof EmButton> & { argTypes: ArgTypes };

const meta: Meta<typeof EmButton> = {
  title: "Example/Button",
  component: EmButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
  <div style="margin:5px;">
  ${val}
  </div>
`

export const Default: Story & { args: { content: string} } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
    useThrottle: true,
    loading: false,
    icon: "search",
    circle: false,
    round: true,
    autofocus: true
  },
  render: (args) => ({
    components: { EmButton },
    setup() {
      return { args };
    },
    template: container(
      `<em-button v-bind="args">{{ args.content }}</em-button>`
    )
  }),

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click btn", async () => {
      await userEvent.click(canvas.getByRole("button"));
    })
    expect(args.onClick).toHaveBeenCalled();
  },
}

export default meta;