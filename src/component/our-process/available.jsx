import React, { useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BgImg from "../../assets/our-process/bgimg.webp";


gsap.registerPlugin(ScrollTrigger);

const Available = () => {
    const leftBoxRef = useRef(null);
    const rightBoxRef = useRef(null);
    const containerRef = useRef(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const triggerOptions = {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
        };

        gsap.fromTo(
            leftBoxRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 0.7, scrollTrigger: triggerOptions }
        );

        gsap.fromTo(
            rightBoxRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 0.9, scrollTrigger: triggerOptions }
        );

    }, []);

    return (
        <Box
            ref={containerRef}
            sx={{
                backgroundImage: `url(${BgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: isMobile ? "auto" : "100vh",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                padding: isMobile ? "10px" : "20px",
                color: "white",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "10px" : "20px",
                    padding: isMobile ? "10px" : "20px",
                    width: "100%",
                    maxWidth: "1100px",
                    alignItems: "center",
                    justifyContent: "right",
                }}
            >
                {/* Left Box - Blue */}
                <Box
                    ref={leftBoxRef}
                    sx={{
                        backgroundColor: "#0037C1",
                        color: "#FFFFFF",
                        padding: isMobile ? "20px" : isTablet ? "35px" : "45px",
                        width: isMobile ? "50%" : isTablet ? "250px" : "300px",
                        borderRadius: "30px 30px 0 30px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        opacity: 0,
                        textAlign: "center",
                    }}
                >
                    <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold" }}>
                        70+ <br />
                        <Typography variant="body1">Shapes available</Typography>
                    </Typography>
                </Box>

                {/* Right Box - White */}
                <Box
                    ref={rightBoxRef}
                    sx={{
                        backgroundColor: "#fff",
                        color: "#0037C1",
                        padding: isMobile ? "20px" : isTablet ? "35px" : "45px",
                        width: isMobile ? "50%" : isTablet ? "250px" : "300px",
                        borderRadius: "30px 30px 30px 0px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        opacity: 0,
                        textAlign: "center",
                    }}
                >
                    <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold" }}>
                        30,000 <br />
                        <Typography variant="body1">Installed capacity (t/year)</Typography>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Available;
