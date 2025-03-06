import React from 'react';
import Inquiry from "../../component/inquiry/inquiry.jsx";
import bg1 from "../../assets/contact/Img1.webp";
import Header from "../../component/global/header.jsx";

function Inquirys() {

    const breadCrumbs = [
        // {label:'We believe that the highest quality is achieved through the development of new generation processes: discover them.'},
    ]
    return (
        <>
            <Header  bgImg={bg1} heading={'Inquiry'} breadcrumbs={breadCrumbs}  />
        <Inquiry />
        </>
    );
}

export default Inquirys;