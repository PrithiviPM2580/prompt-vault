import React from 'react'
import "./style.css"

const Section = ({ children }) => {
    return (
        <section className="section__container">
            {children}
        </section>
    )
}

export default Section