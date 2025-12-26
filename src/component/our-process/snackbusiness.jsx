import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Breadcrumbs, Link, Container } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function SnackBusiness() {
    const breadcrumbsRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const triggerOptions = {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
        };

        gsap.fromTo(breadcrumbsRef.current, { opacity: 0, y: -20 }, {
            opacity: 1, y: 0, duration: 1, scrollTrigger: triggerOptions
        });

        gsap.fromTo(leftTextRef.current, { x: -50, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1, delay: 0.2, scrollTrigger: triggerOptions
        });

        gsap.fromTo(rightTextRef.current, { x: 50, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1, delay: 0.4, scrollTrigger: triggerOptions
        });

    }, []);

    return (
        <Container maxWidth="lg">
            <Box ref={containerRef} sx={{ mb: 4 }}>

                <Box mt={2} ref={breadcrumbsRef}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" color="inherit">Home</Link>
                        <Typography color="textPrimary">How we shape your idea</Typography>
                    </Breadcrumbs>
                </Box>


                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    mt={4}
                    sx={{
                        background: "#F5F5F5",
                        padding: "42px",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                >

                    <Grid item xs={12} md={6} ref={leftTextRef}>
                        <Typography variant="overline" color="textSecondary" sx={{ fontWeight: "500", fontSize: "13px", letterSpacing: "1px" }}>
                            EVERYTHING YOU NEED
                        </Typography>
                        <Typography variant="h4" color="primary" fontWeight="700" mt={1} sx={{ lineHeight: "1.3" }}>
                            We help your snack business to succeed
                        </Typography>
                    </Grid>


                    <Grid item xs={12} md={6} ref={rightTextRef}>
                        <Typography variant="body1" color="textSecondary" sx={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                            Our production lines are engineered to meet the most demanding global requests.
                            With an offer including standard shapes and customized products, we master the
                            quality of the output from the selection of raw materials all through the production process.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default SnackBusiness;
