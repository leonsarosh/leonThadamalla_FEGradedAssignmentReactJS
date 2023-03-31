// import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes as Routing,
} from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Singlemovie from "../pages/singlemovie/Singlemovie";
const Routes = () => {
    return (
        <Router>
            <Routing>
                <Route path="/" element={<Homepage />} />
                <Route path="/:title" element={<Singlemovie />} />
            </Routing>
        </Router>
    );
};

export default Routes;
