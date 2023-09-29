import React from 'react';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./MainContent";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <MainContent/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
