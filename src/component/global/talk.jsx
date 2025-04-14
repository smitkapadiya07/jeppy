import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import img from "../../assets/global/Contact-us.webp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Talk() {
    const navigate = useNavigate();
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(
            imageRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );


        gsap.fromTo(
            contentRef.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <Box sx={{ backgroundColor: "#003361", minHeight: "600px" }} ref={containerRef}>
            <Container maxWidth="lg">
                <Box sx={{ display: { md: "flex", xs: "unset" }, alignItems: "center" }}>

                    {/* Left Side Image with Animation */}
                    <Box
                        ref={imageRef}
                        sx={{
                            height: { md: "500px", xs: "50vh" },
                            display: "flex",
                            justifyContent: "center",
                            padding: { xs: "30px 0", md: "unset" },
                            opacity: 0,
                        }}
                    >
                        <img
                            src={img}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "60px 0 60px 0",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    {/* Right Side Text Content with Animation */}
                    <Box ref={contentRef} sx={{ padding: { md: "0 0 0 133px", xs: "unset" }, opacity: 0 }}>
                        <Typography
                            component="h5"
                            sx={{ fontSize: "40px", color: "#fff", fontWeight: "500", lineHeight: "55px" }}
                        >
                            Got an idea?
                        </Typography>
                        <Typography
                            component="h5"
                            sx={{ fontSize: "40px", color: "#fff", fontWeight: "500", lineHeight: "55px" }}
                        >
                            Let’s talk.
                        </Typography>
                        <Typography sx={{ color: "#fff", fontWeight: "500", flexWrap: "wrap", py: 2 }}>
                            Our team of experts is always at the service of our clients.
                        </Typography>

                        <Typography sx={{ display: "flex" }} onClick={() => navigate("/contact")}>
                            <Typography
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "25px 40px",
                                    border: "1px solid #fff",
                                    color: "#fff",
                                    transition: "0.5s",
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "#003361",
                                        backgroundColor: "#fff",
                                        border: "1px solid #003361",
                                    },
                                }}
                            >
                                Contact us <ChevronRightIcon />
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Talk;
