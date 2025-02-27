import React from 'react';
import {Box} from "@mui/material";
import Img1 from "/src/assets/HomePage/Herosection/Img1.jpeg";

function Herosection() {
    return (
        <Box>
            <Box
                sx={{
                    objectFit: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    margin:0
                }}
            >
                <img
                    src={Img1}
                    alt="Img1"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        margin:0
                    }}
                />
            </Box>

        </Box>
    );
}

export default Herosection;