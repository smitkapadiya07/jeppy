import React from "react";
import { Box } from "@mui/material";
import Img1 from "../../assets/our-process/Img.webp"

function ProcessImage() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "504px",
                overflow: "hidden",
                my: 10,
            }}
        >
            <img
                src={Img1}
                alt="Process"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </Box>
    );
}

export default ProcessImage;
