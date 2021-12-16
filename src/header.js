import React, { useState } from 'react';

const Header = (props) = {
    const data = props
    return (
        <h1>{props.info === '' ? "Hang ON it's loading" : "Astronomy Photo of the Day"}</h1>
        <p>(Nerds only)</p>

    )
}
export default Header;