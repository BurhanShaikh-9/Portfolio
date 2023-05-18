import React, {useRef} from 'react'
import {Header} from './component/header'
import {Outlet} from 'react-router-dom'

    export const Layout = () => {
        const aboutRef = useRef(null);
        const contactRef = useRef(null);
        return (
            <React.Fragment>
                <Header aboutRef={aboutRef} contactRef={contactRef} />
                <Outlet context={{aboutRef , contactRef}} />

            </React.Fragment>
        )
    }
