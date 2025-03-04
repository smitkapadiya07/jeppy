import React from 'react';
import Herosection from "../component/Home-Page/herosection.jsx";
import Youtube from "../component/Home-Page/youtube.jsx";
import OurProduct from "../component/Home-Page/our-product.jsx";
import NewProduct from "../component/Home-Page/new-product.jsx";
import Talk from "../component/global/talk.jsx";

function Home() {
    return (
        <>
            <Herosection/>
            <Youtube/>
            <OurProduct/>
            <NewProduct/>
            <Talk/>
        </>
    );
}

export default Home;