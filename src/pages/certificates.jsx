import React from 'react';
import Certificate from "../component/certificate/certificate.jsx";
import Header from "../component/global/header.jsx";
import bg1 from "../assets/contact/Img1.webp";

function Certificates() {

    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Certificates',route: '/certificate'},
    ]

    return (
        <>
            <Header  bgImg={bg1} heading={'Certificates'} breadcrumbs={breadCrumbs}  />
            <Certificate/>/
        </>
    );
}

export default Certificates;