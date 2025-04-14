import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import Img1 from "/src/assets/HomePage/Herosection/Img1.jpeg";
import Img2 from "/src/assets/herosection/Img1-removebg-preview.png";
import Img3 from "/src/assets/herosection/Img2-removebg-preview.png";
import Img4 from "/src/assets/herosection/Img3-removebg-preview.png";
import Img6 from "/src/assets/herosection/Screenshot_2025-03-20_101155-removebg-preview (1).png";
import Img5 from "/src/assets/herosection/image__1_-removebg-preview.png";

function Herosection() {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const containerRef = useRef(null);
    const imgRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const positions = [
            { x: -60, y: -60, fromX: -200, fromY: 0 },
            { x: 60, y: -60, fromX: 200, fromY: 0 },
            { x: -80, y: 60, fromX: -200, fromY: 0 },
            { x: 0, y: 90, fromX: 0, fromY: 200 },
            { x: 80, y: 60, fromX: 200, fromY: 0 },
        ];

        imgRefs.forEach((ref, index) => {
            if (ref.current) {

                gsap.fromTo(
                    ref.current,
                    { opacity: 0, scale: 0, x: positions[index].fromX, y: positions[index].fromY },
                    { opacity: 1, scale: 1, x: positions[index].x, y: positions[index].y, duration: 1, ease: "power3.out", delay: index * 0.3 }
                );


                gsap.to(ref.current, {
                    y: positions[index].y + 10,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1 + index * 0.3,
                });
            }
        });

        gsap.fromTo(textRef1.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(textRef2.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${Img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                },
            }}
        >
            {/* ✨ Text Above the Images */}
            <Box ref={textRef1} sx={{ position: "relative", zIndex: 2, color: "#fff", fontSize: "32px", fontWeight: "700", opacity: 0 }}>
                A Leading Manufacturer, Exporter & Supplier
            </Box>

            <Box ref={textRef2} sx={{ position: "relative", zIndex: 2, color: "#fff", fontSize: "25px", fontWeight: "500", marginTop: "10px", opacity: 0, mb: 2 }}>
                Premium Quality Snack Pellets
            </Box>

            {/* 📍 Images Placed in Grouped Circular Formation */}
            <Box
                ref={containerRef}
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "250px",
                    height: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {[Img2, Img3, Img4, Img5, Img6].map((imgSrc, index) => (
                    <Box
                        key={index}
                        ref={imgRefs[index]}
                        component="img"
                        src={imgSrc}
                        sx={{
                            position: "absolute",
                            width: "auto",
                            height: "100px",
                            opacity: 0,
                            transform: "scale(0)",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default Herosection;
