import { Story, Meta } from '@storybook/react'
import SortList, { SortListProps } from '.'

export default {
  title: 'SortList',
  component: SortList
} as Meta

export const Default: Story<SortListProps> = (args) => <SortList {...args} />
