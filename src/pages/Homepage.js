import React from 'react';
import NavBar from '../components/Navbar';
import Logo from '../components/Logo';


const Homepage = () => {

    return (
        <div style={{overflow:'hidden'}}>
            <div>
                <NavBar />
            </div>
            <div>
                <div style={{ position: 'relative', backgroundColor: '#ece4ff', textAlign: 'center', height: '100%' }}>
                    <Logo />
                </div>
            </div>
            
        </div>
    )


}

export default Homepage;