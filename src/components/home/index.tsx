import './home.css';

import Header from '../header';
import Hero from '../hero';
import Aos from 'aos';
import { useEffect, Fragment } from 'react';
import Skill from '../skills';
import Resume from '../resume';
import Experience from '../experience';
import OtherWorks from '../other-works';
import { isNavbarOpened } from '../../features/slice/headerSlice';
import { useSelector } from 'react-redux';
import Footer from '../footer';

const Home = () => {

    const navbar = useSelector(isNavbarOpened);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }, []);

    return (
        <div className={`body ${navbar ? 'mobile-nav-active' : ''} `}>
            <Header />
            <Fragment>
                <Hero />
                <div id="skill"><Skill /></div>
                <Resume />
                <Experience />
                <OtherWorks />
            </Fragment>
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default Home;
