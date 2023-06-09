import React, {useMemo, useEffect, memo} from "react";
import nprogress from 'nprogress';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const RouteLoader = (props) => {
    useMemo(() => {
        nprogress.start();
    }, [])

    useEffect(() => {
        return () => {
            nprogress.done();
        };
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route {...props}/>
            </Routes>
        </BrowserRouter>
    )
};

export default memo(RouteLoader);