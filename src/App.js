import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Error from './page/Error';
// import Movie from './page/Movie';

function App() {
  return (
    <div>
      <Header />
      <main className='container content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          {/* <Route path="/movies:/id" component={Movie}/> */}
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
