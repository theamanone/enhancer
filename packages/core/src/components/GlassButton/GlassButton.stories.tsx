import type { Meta, StoryObj } from '@storybook/react';
import { GlassButton } from './GlassButton';

const meta = {
  title: 'Components/GlassButton',
  component: GlassButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlassButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Glass Button',
    variant: 'default',
    size: 'default',
    glow: false,
  },
};

export const Colored: Story = {
  args: {
    children: 'Colored Glass',
    variant: 'colored',
    size: 'lg',
    glow: true,
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark Glass',
    variant: 'dark',
    size: 'default',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    variant: 'default',
    loading: true,
  },
};

export const WithGlow: Story = {
  args: {
    children: 'Glowing Button',
    variant: 'colored',
    glow: true,
  },
};
