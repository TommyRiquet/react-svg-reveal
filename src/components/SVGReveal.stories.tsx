import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import SVGReveal from './SVGReveal'

import svg from './svg.json'

const meta: Meta<typeof SVGReveal> = {
	component: SVGReveal,
	title: 'SVGReveal',
	argTypes: {},
  };
  export default meta;

type Story = StoryObj<typeof SVGReveal>;

export const SVGRevealAnimation: Story = (args) => (
	<SVGReveal data-testId='SVGReveal-id' {...args} />
  )

  SVGRevealAnimation.args = {
	width: 750,
	height: 600,
	strokeWidth: 2,
	viewBox: '0 0 800 100',
	backgroundColor: 'black',
	stroke: 'white',
	path: JSON.parse(JSON.stringify(svg)).path,
  }
