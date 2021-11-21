import './home.css';

import Header from '../header';
import {Container} from 'react-bootstrap';

const Home = () => {
    return (
        <section className="page-1">
            <Container>
                <Header></Header>
            </Container>
        </section>
    );
}

export default Home;
