import React from 'react';
import Companyprofile from "../component/profile/companyprofile.jsx";
import Header from "../component/global/header.jsx";

function Profile() {
    return (
        <>
            <Header title={"Profile"} />
            <Companyprofile/>
        </>
    );
}

export default Profile;