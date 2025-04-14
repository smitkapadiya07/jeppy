import React from "react";
import img1 from "../../assets/HomePage/certificate/Img1.jpg";
import img2 from "../../assets/HomePage/certificate/Img2.png";
import img3 from "../../assets/HomePage/certificate/Img3.jpg";
import img4 from "../../assets/HomePage/certificate/Img4.webp";
import img5 from "../../assets/HomePage/certificate/Img5.jpg";
import {Box, Container, Grid, Typography} from "@mui/material";

function AboutBrand() {
    const people = [
        { imageSrc: img1 },
        { imageSrc: img2 },
        { imageSrc: img3 },
        { imageSrc: img4 },
        { imageSrc: img5 },
    ];

    return (
        <Box sx={{ padding: { lg: "60px 0px 120px 0px", xs: "40px 0px 40px 0px" } }}>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ fontWeight: "700", mb: 5,display:"flex",justifyContent: "center" }}>
                    CERTIFICATES
                </Typography>
                <Grid container spacing={{ lg: 2 }}>
                    {people.map((value, ind) => (
                        <Grid item key={ind} md={3} sm={4} xs={6}>
                            <Box
                                sx={{
                                    height: "140px",
                                    px: 5,
                                    width: "100%",
                                    transition: "1s",
                                    ":hover img": {
                                        opacity: "1 !important",
                                        transform: "scale(1.1)"
                                    }
                                }}
                            >
                                <img
                                    src={value.imageSrc}
                                    alt={`Certificate ${ind + 1}`}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        opacity: "0.5",
                                        objectFit: "contain",
                                        borderRadius: "5px",
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutBrand;