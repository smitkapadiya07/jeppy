import React from 'react';
import {Box} from "@mui/material";
import Contact from "../component/contact/contact.jsx";
import Header from "../component/global/header.jsx";

function Contacts() {
    return (
        <>
            <Header title={"Contact"} />
            <Contact/>
        </>
    );
}

export default Contacts;