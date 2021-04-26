import React from 'react';
import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Row from './components/Row';
import request from './utils/Api'

function App() {
  return (
    <div className="App">
      {/* navabar */}
      <Nav />
      {/* banner */}
      <Banner />
      {/* rows */}
      <Row title="Programmes originaux Netflix" Url={request.fetchNetflixOriginals} isPoster={true}/>
      <Row title="Tendances actuelles" Url={request.fetchTrending} />
      <Row title="Films d'action" Url={request.fetchActionMovies} />
      <Row title="Film comédie" Url={request.fetchComedyMovies}/>
      <Row title="Series comedie" Url={request.fetchDocumentaries}/>

      {/* video */}

      {/* qUICK VIEW */}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
