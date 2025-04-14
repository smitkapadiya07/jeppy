import React from 'react';
import Herosection from "../component/Home-Page/herosection.jsx";
import Youtube from "../component/Home-Page/countdown.jsx";
import OurProduct from "../component/Home-Page/our-product.jsx";
import NewProduct from "../component/Home-Page/new-product.jsx";
import Countdown from "../component/Home-Page/countdown.jsx";
import Certificate from "../component/certificate/certificate.jsx";

function Home() {
    return (
        <>
            <Herosection/>
            <Countdown/>
            <Certificate/>
            <OurProduct/>
            <NewProduct/>
        </>
    );
}

export default Home;