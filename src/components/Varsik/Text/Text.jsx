import React from 'react'

import "./Text.scss"

export default function Text({as, clName, theme, children}) {
    const Element = as;
    

    return (
        <div>
            <Element className={`Text ${clName} Text-${theme}`}>{children}</Element>
        </div>
    )
}
