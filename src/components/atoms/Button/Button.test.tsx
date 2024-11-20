import { render, screen } from '@testing-library/react'
import { ButtonInterface  } from './Button.interface'
import Button from './Button'
import { ButtonMock } from './Button.mock'

/// TODO: fix test based upon interface
const testID = "Button-" + Math.floor(Math.random()*90000) + 10000

describe("Button", () => {

    it("Can render Button", () => {
        render(<Button testID={ testID } { ...ButtonMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})