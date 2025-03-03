import React from 'react';
import {Box} from "@mui/material";
import Contact from "../component/contact/contact.jsx";
import Header from "../component/global/header.jsx";
import bg1 from "../assets/contact/Img1.webp"


function Contacts() {

    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Contact',route: '/contact'},
    ]

    return (
        <>
            <Header  bgImg={bg1} heading={'Contact Us'} breadcrumbs={breadCrumbs}  />
            <Contact/>
        </>
    );
}

export default Contacts;