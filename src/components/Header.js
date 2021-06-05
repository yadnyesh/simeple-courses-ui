import React from "react"

function Header({name, title}) {
    return(
        <div>
            <h1>{name}, {title} </h1>
            <p>This is my Header component</p>
        </div>
    )
}

export default Header;