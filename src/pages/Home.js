import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import Hero from '../com/Hero';

function Home () {
return (
	<div>
    <Outlet/>
	<Hero/>
	</div>
);
};

export default Home;
