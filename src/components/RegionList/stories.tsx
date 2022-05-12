import { Story, Meta } from '@storybook/react'
import RegionList from '.'

export default {
  title: 'RegionList',
  component: RegionList
} as Meta

export const Default: Story = (args) => <RegionList {...args} />
