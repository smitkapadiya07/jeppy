import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from "../../assets/HomePage/Countdown/depositphotos_269675254-stock-photo-snack-pellets-non-expanded-products.webp";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Satisfied Clients", value: 8.6, suffix: "k", color: "#F4B400", icon: "\u{1F465}" },
    { label: "Expert Team", value: 32, suffix: "+", color: "#27AE60", icon: "\u{1F91D}" },
    { label: "Activate Products", value: 600, suffix: "+", color: "#E74C3C", icon: "\u{1F4E6}" },
    { label: "Awards Winning", value: 24, suffix: "+", color: "#2980B9", icon: "\u{1F3C6}" },
];

const positions = [
    { top: "10%", left: "10%" },
    { top: "10%", right: "10%" },
    { bottom: "10%", left: "10%" },
    { bottom: "10%", right: "10%" },
];

function StatsSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <Box sx={{ position: "relative", textAlign: "center", py: 5, background: "#F8F9FA" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                <img src={Img1} alt="Snack Pellets" style={{ width: "40%", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }} />
                {stats.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "absolute",
                            ...positions[index % positions.length],
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                background: item.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                transform: "scale(1)",
                                transition: "transform 0.3s",
                                "&:hover": { transform: "scale(1.1)" },
                            }}
                        >
                            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                                <CountUp start={0} end={item.value} duration={3} />
                                {item.suffix}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "16px", fontWeight: "600", color: "#555", mt: 1 }}>{item.label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default StatsSection;