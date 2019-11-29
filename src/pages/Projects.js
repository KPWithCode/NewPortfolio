import React from 'react';
import Navbar from '../components/Navbar';
import YelpApp from '../media/YelpApp.mp4';
import HostelWebsite from '../media/HostelWebsite.mp4'
import { SocialIcon} from 'react-social-icons';
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

                        <div className="card shadow p-3 mb-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            {/* <img className="card-img-top" style={{ height: '50%' }} src={require('../photos/HostelSite.png')} alt="Hostel Site" /> */}
                            <video controls autoPlay className="card-img-top" style={{height:'50%'}} src={HostelWebsite} type="video/mp4" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em' }}>Hostel Landing Page</p>
                                <SocialIcon url="https://github.com/KPWithCode/Hostelle" />
                            </div>
                        </div>


                        <div className="card shadow p-3 mb-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            <img className="card-img-top" style={{ height: '50%' }} src={require('../photos/BlogSite.png')} alt="Blog Site" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em' }}>FullStack Blog Site</p>
                                <SocialIcon url="https://github.com/KPWithCode/haven2" />
                            </div>
                        </div>


                        <div className="card shadow p-3 mb-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            <img className="card-img-top" style={{ height: '50%' }} src={require('../photos/PusherChat.png')} alt="Chatroom App" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em' }}>Chatroom</p>
                                <SocialIcon url="https://github.com/KPWithCode/HavenChatApp" />
                            </div>
                        </div>

                        <div className="card shadow p-3 mb-5" style={{ width: '50%', backgroundColor: '#ffe8e4', borderColor: '#ffe8e4' }}>
                            {/* <img className="card-img-top" style={{ height: '60%' }} src={require('../media/YelpApp.mp4')} alt="Weather App" /> */}
                            <video controls autoPlay className="card-img-top" style={{height:'50%'}} src={YelpApp} type="video/mp4" />
                            <div className="card-body" style={{ height: '20%' }}>
                                <p className="crimson" style={{ fontSize: '1.5em' }}>Weather App</p>
                                <SocialIcon url="https://github.com/KPWithCode/Foodie" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    )
}


export default Projects;