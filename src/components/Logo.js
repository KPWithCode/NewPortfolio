import React from 'react';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {
    DiBootstrap, DiMongodb,
    DiNodejs, DiPostgresql,
    DiMysql, DiHtml5,
    DiCss3, DiJsBadge, DiReact,
    DiHeroku
} from 'react-icons/di'

const Logo = () => {

    return (
        <div style={{ height: '100vh' }}>
            <div className="crimson gradient" >
                <h1 style={{ fontSize: '10em', letterSpacing: '1.3em', marginLeft: '11%' }}> KYLE</h1>
            </div>
            <div className="text-center">
                <div>
                    <h1 className="crimson" style={{ letterSpacing: '0.5em', textDecoration: 'underline' }}>FULL STACK DEVELOPER</h1>
                    <h3 className="crimson my-5" style={{ letterSpacing: '.25em' }}> With An Affinity For Problem Solving</h3>
                    <h5 className="crimson my-3" style={{ letterSpacing: '.25em' }}>Technology Stack</h5>
                </div>
                <div style={{ flexDirection: 'row',margin:'2px' }}>
                    <h1>
                        <DiHtml5 className="mx-2"  />
                        <DiCss3 className="mx-2" />
                        <DiJsBadge className="mx-2" />
                        <DiBootstrap className="mx-2" />
                        <DiReact className="mx-2" />
                        <DiNodejs className="mx-2"  />
                    </h1>
                    <h1>

                        <DiMongodb className="mx-2"  />
                        <DiMysql className="mx-2"  />
                        <DiPostgresql className="mx-2" />
                        <DiHeroku className="mx-2" />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Logo;