import React from 'react'

const Header = () => 
{
    return (
        <nav className = "navbar navbar-expand-md">
            <a className="navbar-brand" href="index.html">VIVA</a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;