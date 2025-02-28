import React from 'react';
import { Box, Grid, Typography, Container } from "@mui/material";
import Img1 from "/src/assets/certificate/Img1.png";
import Img2 from "/src/assets/certificate/Img2.png";
import Img3 from "/src/assets/certificate/Img3.png";

const certificates = [
    { img: Img1, text: "BUSINESS LEADER OF THE YEAR" },
    { img: Img2, text: "ISO CERTIFIED 22000" },
    { img: Img3, text: "9001 & FSSAI CERTIFIED" }
];

function Certificate() {
    return (
        <Box sx={{ backgroundColor: "#fafaf0", p:"80px 0px 40px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {certificates.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{ textAlign: "center",overflow:"hidden", }}>
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt="certificate"
                                    sx={{
                                        width: "65px",
                                        height: "auto",
                                        mb: 1,

                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.2)",

                                        },
                                    }}
                                />

                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: "bold", textTransform: "uppercase",fontSize: "18px" }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Certificate;
