import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Researchndselection() {
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            leftTextRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: leftTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            rightTextRef.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: rightTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid
                container
                spacing={4}
                mt={4}
                sx={{
                    background: "#F5F5F5",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Left Text */}
                <Grid item xs={12} md={6} ref={leftTextRef}>
                    <Typography variant="overline" color="textSecondary"
                                sx={{ fontWeight: "500", fontSize: "13px", letterSpacing: "1px" }}>
                        Research and selection
                    </Typography>
                    <Typography variant="h4" color="primary" fontWeight="700" mt={1} sx={{ lineHeight: "1.3" }}>
                        More than a good <br /> snack
                    </Typography>
                </Grid>

                {/* Right Text */}
                <Grid item xs={12} md={6} ref={rightTextRef}>
                    <Typography variant="body1" color="textSecondary"
                                sx={{ fontSize: "0.95rem", lineHeight: "1.6", mb: 2 }}>
                        To get the best from our products we are always engaged to improve our processes. This is not
                        only linked to innovation and the control of manufacturing but also to the selection of
                        suppliers and the research of the best ingredients.
                    </Typography>
                    <Typography variant="body1" color="textSecondary"
                                sx={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        Quality means working closely with our suppliers to eliminate any defects from incoming raw
                        materials, and with our technical partners to make innovations in our production plants.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Researchndselection;
