import React from 'react';
import {Box} from "@mui/material";
import Available from "../../component/our-process/available.jsx";
import Snackbusiness from "../../component/our-process/snackbusiness.jsx";
import Researchndselection from "../../component/our-process/researchndselection.jsx";
import Video from "../../component/our-process/video.jsx";
import Processimgae from "../../component/our-process/processimgae.jsx";
import bg1 from "../../assets/contact/Img1.webp";
import Header from "../../component/global/header.jsx";
import Talk from "../../component/global/talk.jsx";


function Ourprocesss() {

    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Our-Process',route: '/ourprocess' },
    ]
    return (
        <Box>
            <Header  bgImg={bg1} heading={'Our Process'} breadcrumbs={breadCrumbs}  />
            <Snackbusiness />
            <Available />
            <Video/>
            <Researchndselection />
            <Processimgae/>
            <Talk/>
        </Box>
    );
}

export default Ourprocesss;