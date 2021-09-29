import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests.js';
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="app">
      {/**Navbar */}
      <Nav />

      {/** Banner */}
      <Banner />

      {/** movies rows */}
        <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
        />
        <Row  title="Trending Now" fetchUrl= {requests.fetchTrending}/>
        <Row  title="Top Rated" fetchUrl= {requests.fetchTopReated}/>
        <Row  title="Action Movies" fetchUrl= {requests.fetchActionMovies}/>
        <Row  title="Comedy Movies" fetchUrl= {requests.fetchComedyMovies}/>
        <Row  title="Horro Movies" fetchUrl= {requests.fetchHorrorMovies}/>
        <Row  title="Romance Movies" fetchUrl= {requests.fetchRomanceMovies}/>
        <Row  title="Documentaries" fetchUrl= {requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
