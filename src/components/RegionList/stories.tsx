import { Story, Meta } from '@storybook/react'
import RegionList, { RegionListProps } from '.'

export default {
  title: 'RegionList',
  component: RegionList
} as Meta

export const Default: Story<RegionListProps> = (args) => (
  <RegionList {...args} />
)
