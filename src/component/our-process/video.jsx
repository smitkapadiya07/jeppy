import React from "react";
import { Box } from "@mui/material";

function Video() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "490px",
                overflow: "hidden",
                my:10
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src="https://www.valin.net/app/uploads/2022/06/produzione-1.mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
}

export default Video;
