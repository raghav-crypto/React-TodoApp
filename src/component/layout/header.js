import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}
const linkStyle = {
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none'
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#ffacb7',
    color: '#ffe0ac'
}
export default Header;