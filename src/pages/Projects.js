import React from 'react';
import Navbar from '../components/Navbar';
import YelpApp from '../media/YelpApp.mp4';
import HostelWebsite from '../media/HostelWebsite.mp4'
import Ontheball from '../media/Ontheball.mp4'
import { SocialIcon } from 'react-social-icons';
const Projects = () => {


    return (
        <div>
            <Navbar />
            <div>
                <div style={{ position: 'relative', backgroundColor: '#ffe8e4', overflow: 'hidden', textAlign: 'center', height: '100%' }} >
                    <div>
                        <div className="projectG crimson">
                            <h1 style={{ fontSize: '10em', letterSpacing: '0.4em', marginLeft: '2.7%' }}>PROJECTS</h1>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%' }}>

                        <div className="card shadow p-3 mb-5 mt-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            {/* <img className="card-img-top" style={{ height: '50%' }} src={require('../photos/HostelSite.png')} alt="Hostel Site" /> */}
                            <video controls autoPlay className="card-img-top shadow" style={{ height: '50%' }} src={HostelWebsite} type="video/mp4" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Hostelle</p>
                                <SocialIcon url="https://github.com/KPWithCode/Hostelle" />
                            </div>
                            <p className="crimson" style={{ fontSize: '1.4em' }}>Hostel</p>
                            <p className="crimson" style={{ fontSize: '1.2em' }}>React & Bootstrap</p>
                        </div>
                        <div className="card shadow p-3 mb-5 mt-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            {/* <img className="card-img-top" style={{ height: '50%' }} src={require('../photos/BlogSite.png')} alt="Blog Site" /> */}
                            <video controls autoPlay className="card-img-top shadow" style={{ height: '50%' }} src={Ontheball} type="video/mp4" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>On The Ball</p>
                                <SocialIcon url="https://github.com/KPWithCode/haven2" />
                            </div>
                            <p className="crimson" style={{ fontSize: '1.4em' }}>Fitness Tracker</p>
                            <p className="crimson" style={{ fontSize: '1.2em' }}>Crud based application using the MERN stack</p>
                        </div>


                        <div className="card shadow p-3 mb-5 mt-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            <img className="card-img-top" style={{ height: '50%' }} src={require('../photos/PusherChat.png')} alt="Chatroom App" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>AgriChat</p>
                                <SocialIcon url="https://github.com/KPWithCode/HavenChatApp" />
                            </div>
                            <p className="crimson" style={{ fontSize: '1.4em' }}>Chatroom App</p>
                            <p className="crimson" style={{ fontSize: '1.2em' }}>React based website using Pusher Api</p>
                        </div>

                        <div className="card shadow p-3 mb-5 mt-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            {/* <img className="card-img-top" style={{ height: '60%' }} src={require('../media/YelpApp.mp4')} alt="Weather App" /> */}
                            <video controls autoPlay className="card-img-top shadow" style={{ height: '50%' }} src={YelpApp} type="video/mp4" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Foodie </p>
                                <SocialIcon url="https://github.com/KPWithCode/Foodie" />
                            </div>
                            <p className="crimson" style={{ fontSize: '1.4em' }}>Food App</p>
                            <p className="crimson" style={{ fontSize: '1.2em' }}>React Native app utilizing the Yelp Api</p>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    )
}


export default Projects;