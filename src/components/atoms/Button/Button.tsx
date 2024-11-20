// import { useState, useEffect, useContext } from 'react'
import { ButtonInterface } from './Button.interface'

/// TODO: update interface/arguments for Button
const Button = ({testID, style, type, size, props }:ButtonInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Button` }>
        </div>
    )

}

export default Button
