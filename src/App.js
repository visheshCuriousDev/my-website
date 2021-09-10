import './App.css';
import Header from './components/header';
import MiniBytes from './components/mini-bytes';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <section className="content">
        <MiniBytes></MiniBytes>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
