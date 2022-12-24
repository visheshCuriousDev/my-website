import './home.css';

import Header from '../header';
import Hero from '../hero';
import Aos from 'aos';
import { useEffect } from 'react';
import About from '../about';
import Resume from '../resume';
import Experience from '../experience';
import OtherWorks from '../other-works';
import Contact from '../contact';
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
            <Hero />
            <About />
            <Resume />
            <Experience />
            <OtherWorks />
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default Home;
