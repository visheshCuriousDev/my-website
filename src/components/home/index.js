import './home.css';

import Header from '../header';
import CssEx from '../css-ex';
import {Container} from 'react-bootstrap';

const Home = () => {
    return (
        <section className="page-1">
            <Container>
                <Header></Header>
                <CssEx></CssEx>
            </Container>
        </section>
    );
}

export default Home;
