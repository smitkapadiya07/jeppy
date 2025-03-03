import React from 'react';
import {Box} from "@mui/material";
import Shap from "../../component/r&d/shap.jsx";
import Header from "../../component/global/header.jsx";
import bg1 from "../../assets/contact/Img1.webp";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Shapes',route: '/shapes'},
]

function Shapes() {
    return (
        <>
            <Header  bgImg={bg1} heading={'Shapes'} breadcrumbs={breadCrumbs}  />
        <Shap/>
        </>
    );
}

export default Shapes;