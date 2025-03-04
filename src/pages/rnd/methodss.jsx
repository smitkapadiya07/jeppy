import React from 'react';
import Methods from "../../component/r&d/methods.jsx";
import Header from "../../component/global/header.jsx";
import bg1 from "../../assets/contact/Img1.webp";
import Talk from "../../component/global/talk.jsx";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Methode',route: '/methode'},
]

function Methodss() {
    return (
        <>
            <Header  bgImg={bg1} heading={'Methode'} breadcrumbs={breadCrumbs}  />
            <Methods/>
            <Talk/>
        </>
    );
}

export default Methodss;