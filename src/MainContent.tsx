import React, {Suspense} from 'react';
import Fallback from "./components/Fallback";
import Loading from "./components/Loading";
import {Route, Routes, useLocation} from "react-router-dom";
import appRouter from "./routes/appRouter";
import {ErrorBoundary} from "react-error-boundary";

const MainContent = () => {
    const location = useLocation();
    return (
        <ErrorBoundary fallbackRender={Fallback} key={location.pathname}>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {appRouter.map((route) =>
                        <Route path={route.path} key={route.id} element={<route.component/>}/>
                    )}
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default MainContent;