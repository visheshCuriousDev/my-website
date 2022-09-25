import './home.css';

import Header from '../header';
import Hero from '../hero';
import Aos from 'aos';
import { useEffect } from 'react';
import About from '../about/about';
import Resume from '../resume';
import Experience from '../experience';
import OtherWorks from '../other-works';
import Contact from '../contact/contact';
import { isNavbarOpened } from '../../features/slice/headerSlice';
import { useSelector } from 'react-redux';

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
            <Hero />
            <main id="main">
                <About />
                <Resume />
                <Experience />
                <OtherWorks />
                <Contact />
            </main>
        </div>
    );
}

export default Home;
