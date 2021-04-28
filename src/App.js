import React from 'react';
import { Redirect, Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Row from './components/Row';
// import Video from './components/Video'
import request from './utils/Api'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
        
            <Nav />
         
            <Banner />
         
            <Row title="Programmes originaux Netflix" Url={request.fetchNetflixOriginals} isPoster={true} />
            <Row title="Tendances actuelles" Url={request.fetchTrending} />
            <Row title="Films d'action" Url={request.fetchThrillerMovies} />
            <Row title="Film comédie" Url={request.fetchComedyMovies} />
            <Row title="Série Mystérieuse" Url={request.fetchHorrorMovies} />
            <Row title="Série Kids" Url={request.fetchKidsSeries} />
            <Row title="Séries TV populaire" Url={request.fetchSeriesTV} />

            {/* video */}

            {/* qUICK VIEW */}

            {/* footer */}
            <Footer />
          </Route>
          {/* <Route path="/video/:id" component={Video}/> */}
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
