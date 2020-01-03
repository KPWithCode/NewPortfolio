import React from 'react';
import Navbar from '../components/Navbar';
import '../scss/app.scss';
// import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

const About = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div style={{ position: 'relative', backgroundColor: '#e4fff4', overflow: 'hidden', textAlign: 'center', height: '100%' }} >
                    <div>
                        <div className="abtG crimson">
                            <h1 style={{ fontSize: '10em', letterSpacing: '0.8em', marginLeft: '9%' }}> ABOUT</h1>
                        </div>
                    </div>
                    <section className="mx-5 p-3 shadow-lg  " style={{ height: '50%' }}>
                        <h3 className="crimson mx-5 d-flex justify-content-center" style={{ fontSize: '2em', marginTop: '1em', lineHeight: '1.3em' }}>
                            Full Stack Developer who is currently interning at Errunds. A startup connecting Brick and Mortar businesses with local consumers.
                            My introduction to coding stemmed from my background in Psychology as I became curious about
                            Human-Computer Interaction. Soon after I enrolled into Covalence.io Molecular Program (Part-Time).
                            Join me as I exercise my passion to improve as a Full Stack Developer. Find out more about me by clicking one of the links below
                    </h3>

                        <div className="d-flex justify-content-center my-5 ">

                            <div className="mx-2">
                            <SocialIcon url="https://www.linkedin.com/in/kyle-phillips-57a20318b/" />
                            </div>
                            {/* <button className="crimson mt-2 shadow mx-3" style={{ backgroundColor: '#ffe8e4' }}>
                                <Link to="/contact" style={{ textDecoration: 'None', color: 'black', backgroundColor: '#ffe8e4', width: '100%', height: '100%' }}>Github
                                    </Link>
                            </button> */}
                            <div className="mx-2">
                            <SocialIcon url="https://github.com/KPWithCode" />
                            </div>
                            {/* <button className="crimson mt-2 shadow mx-3" style={{ backgroundColor: '#ffe8e4' }}>
                                <Link to="/contact" style={{ textDecoration: 'None', color: 'black', backgroundColor: '#ffe8e4', width: '100%', height: '100%' }}>LinkedIn
                                    </Link>
                            </button> */}
                            {/* <button className="crimson mt-2 shadow mx-3" style={{ backgroundColor: '#ffe8e4' }}>
                                <Link to="/contact" style={{ textDecoration: 'None', color: 'black', backgroundColor: '#ffe8e4', width: '100%', height: '100%' }}>Twitter
                                    </Link>
                            </button> */}
                            <div className="mx-2">
                            <SocialIcon url="https://twitter.com/KylewithCode" />
                            </div>
                        </div>

                    </section>

                </div>
            </div>

        </div>

    )
}


export default About;