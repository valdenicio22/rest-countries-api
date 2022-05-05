import { Story, Meta } from '@storybook/react'
import CountryCard, { CountryCardProps } from '.'

export default {
  title: 'CountryCard',
  component: CountryCard,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    population: '11555997',
    region: 'Europe',
    capital: 'Brussels',
    flags: { svg: 'https://flagcdn.com/be.svg' },
    name: { common: 'Belgium' }
  }
} as Meta<CountryCardProps>

export const Default: Story<CountryCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <CountryCard {...args} />
  </div>
)
