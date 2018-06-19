import React from 'react';
import './Header.css';

function Header(props){
    return(
        <div>
        <h1 className="text-center">~~ {props.text} ~~</h1>
        </div>
    )
}

export default Header;