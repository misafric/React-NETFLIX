import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
import Row from './Row';
import requests from "./Requests";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="TOP Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horrors" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    
        </div>
    );
}

export default HomeScreen;
