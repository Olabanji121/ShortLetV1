import React from 'react'

const Hero = ({children, styleClass}) => {
    return (
        <header className={styleClass}>
            {children}
        </header>
    )
}


Hero.defaultProps ={
    styleClass: "defaultHero"
}
export default Hero
