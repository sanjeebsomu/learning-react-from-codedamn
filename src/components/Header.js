import React from 'react'

const Header = () => {
    const  amIAbove18 = false;
    return (
        <div>
            <h1 className="header">This is Header {amIAbove18 ? <p>I am above 18</p> : <p>I am too small</p>}</h1>
        </div>
    )
}

export default Header
