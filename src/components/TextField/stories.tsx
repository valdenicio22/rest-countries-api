import { Story, Meta } from '@storybook/react'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />
