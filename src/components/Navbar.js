import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/app.scss';

const NavBar = () => {

    return (
        <div style={{ backgroundColor: '#ffe8e4', width: '100%', overflow: 'hidden', height: '16%' }}>
            <div className="crimson" style={{ paddingTop: '3%' }}>
                <div className="d-flex justify-content-around" style={{ display: 'inline' }}>
                    <Link style={{ textDecoration: 'none', fontSize: '1em', color: 'black', cursor: 'pointer' }} to="/about">ABOUT</Link>
                    <a href="https://twitter.com/KylewithCode" style={{ textDecoration: 'none', fontSize: '1em', color: 'black', cursor: 'pointer' }}>TWITTER</a>
                    <Link style={{ textDecoration: 'none', fontSize: '1em', color: 'black', cursor: 'pointer' }} to="/projects">PROJECTS</Link>
                    <a href="https://github.com/KPWithCode" style={{ textDecoration: 'none', fontSize: '1em', color: 'black', cursor: 'pointer' }}>GITHUB</a>
                </div>
                <Link className="mono text-center d-flex justify-content-center" to="/"
                    style={{ fontSize: '2em', textDecoration: 'none',color:'black' }}> KP</Link>
            </div>
            <hr style={{ marginBottom: '10%' }} />

        </div>

    )


}

export default NavBar;