import React from 'react';
import Companyprofile from "../component/profile/companyprofile.jsx";
import Header from "../component/global/header.jsx";
import bg1 from "../assets/contact/Img1.webp";

function Profile() {

    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Profile',route: '/profile'},
    ]

    return (
        <>
            <Header  bgImg={bg1} heading={'Profile'} breadcrumbs={breadCrumbs}  />
            <Companyprofile/>
        </>
    );
}

export default Profile;