import React from 'react';
import Herosection from "../component/Home-Page/herosection.jsx";
import Youtube from "../component/Home-Page/youtube.jsx";
import OurProduct from "../component/Home-Page/our-product.jsx";
import NewProduct from "../component/Home-Page/new-product.jsx";

function Home() {
    return (
        <>
            <Herosection/>
            <Youtube/>
            <OurProduct/>
            <NewProduct/>
        </>
    );
}

export default Home;