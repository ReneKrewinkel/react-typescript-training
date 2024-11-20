import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ButtonSrc from './Button'
import { ButtonInterface  } from './Button.interface'
import { ButtonMock } from './Button.mock'

/// TODO: Adapt Stories
const ButtonMeta: Meta<typeof ButtonSrc> = {
    title: "atoms/Button",
    component: ButtonSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ButtonSrc>
export const Button: Story = {
    args: { ...ButtonMock }
}

export default ButtonMeta