import React from "react";
import { Box, Container } from "@mui/material";

function Youtube() {
    return (
        <Box sx={{ padding: "10px 0px" }}>
            <Container maxWidth={"lg"}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "65px",
                        paddingBottom: "30px",
                    }}
                >

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            aspectRatio: "16/9",
                            paddingRight: { md: "18px", sm: "none" },
                            borderRight: { md: "2px solid #EEEEEE", sm: "none" },
                        }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/5bwGLg6Y52M"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            aspectRatio: "16/9",
                            paddingRight: { md: "14px", sm: "none" },
                            borderRight: { md: "2px solid #EEEEEE", sm: "none" },
                        }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/pZsd9cHwzIg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Box>

                </Box>
            </Container>
            <Box
                sx={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#EEEEEE",
                }}
            ></Box>
        </Box>
    );
}

export default Youtube;
