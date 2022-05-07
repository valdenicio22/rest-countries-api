import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Select',
  component: Select
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
