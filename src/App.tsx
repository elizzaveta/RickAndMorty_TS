import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import appRouter from "./routes/appRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                {appRouter.map((route)=>
                    <Route path={route.path} key={route.id} element={<route.component/>}/>
                )}
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
