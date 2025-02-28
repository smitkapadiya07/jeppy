import React from 'react';
import {Box} from "@mui/material";
import Img1 from "/src/assets/rnd/Img1.jpeg";

function Methods() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                padding: "100px 0px",
            }}
        >
            <img
                src={Img1}
                alt="Descriptive Image"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                }}
            />
        </Box>

    );
}

export default Methods;