import React from 'react';
import {Box} from "@mui/material";
import Img1 from "/src/assets/rnd/Img1.jpeg";

function Methods() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
           <img src={Img1} alt={"Img1"}></img>
        </Box>
    );
}

export default Methods;