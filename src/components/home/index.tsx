import './home.css';

import Hero from '../hero';
import Aos from 'aos';
import { useEffect, Fragment } from 'react';
import Skill from '../skills';
import Resume from '../resume';
import Experience from '../experience';
import OtherWorks from '../other-works';

const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }, []);

    return (
        <Fragment>
            <Hero />
            <div id="skill"><Skill /></div>
            <Resume />
            <Experience />
            <OtherWorks />
            {/* <Contact /> */}
        </Fragment>
    );
}

export default Home;
