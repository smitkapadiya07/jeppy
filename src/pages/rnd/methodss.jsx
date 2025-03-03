import React from 'react';
import Methods from "../../component/r&d/methods.jsx";
import Header from "../../component/global/header.jsx";
import bg1 from "../../assets/contact/Img1.webp";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Methode',route: '/methode'},
]

function Methodss() {
    return (
        <>
            <Header  bgImg={bg1} heading={'Methode'} breadcrumbs={breadCrumbs}  />
            <Methods/>
        </>
    );
}

export default Methodss;