import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Img1 from "/src/assets/HomePage/NewProduct/Img1.jpg";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const productsData = [
    { iconic: Img1 },
    { iconic: Img1 },
    { iconic: Img1 },
    { iconic: Img1 },
    { iconic: Img1 },
    { iconic: Img1 }
];
const newData = [
    { new: Img1 },
    { new: Img1 },
    { new: Img1 },
    { new: Img1 },
    { new: Img1 },
    { new: Img1 }
];

const NewProduct = () => {
    const swiperRef = useRef(null);

    const handleNext1 = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev1 = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Box sx={{ width: "100%", textAlign: "center", backgroundColor: "#004c78" }}>
            <Box className="newProduct" sx={{ padding: "80px 0px", margin: "50px 0px 0 0" }}>
                <Box sx={{ display: { xs: "unset", md: "flex" } }}>
                    <Box sx={{ width: { md: "50%", xs: "100%" } }}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ marginBottom: 4, color: "#fff", fontSize: "25px", textTransform: "uppercase", letterSpacing: "2px" }}
                        >
                            Iconic <br /> Products
                        </Typography>
                        <Box sx={{ overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Button className="swiper-button-prev" sx={{ color: '#005EA0', borderRadius: '50%', height: '65px', width: '60px' }}>
                                <KeyboardArrowLeftIcon />
                            </Button>
                            <Swiper
                                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                                modules={[Navigation]}
                                breakpoints={{ 320: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
                                loop={true}
                            >
                                {productsData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box sx={{ padding: "0 10px", transition: "transform 0.3s", '&:hover': { transform: "scale(1.1)" } }}>
                                            <img src={item.iconic} alt="Img1" style={{ width: "100%" }} />
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Button className="swiper-button-next" sx={{ color: '#005EA0', borderRadius: '50%', height: '65px', width: '60px' }}>
                                <KeyboardArrowRightIcon />
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ width: { md: "50%", xs: "100%" } }}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ marginBottom: 4, color: "#fff", fontSize: "25px", textTransform: "uppercase", letterSpacing: "2px" }}
                        >
                            What's New <br /> Products
                        </Typography>
                        <Box sx={{ overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Button className="swiper" sx={{ color: '#005EA0', borderRadius: '50%' }} onClick={handlePrev1}>
                                <KeyboardArrowLeftIcon sx={{ fontSize: "50px" }} />
                            </Button>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation]}
                                breakpoints={{ 320: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
                                loop={true}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                {newData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box sx={{ padding: "0 10px", transition: "transform 0.3s", '&:hover': { transform: "scale(1.1)" } }}>
                                            <img src={item.new} alt="Img1" style={{ width: "100%" }} />
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Button className="swiper" sx={{ color: '#005EA0', borderRadius: '50%' }} onClick={handleNext1}>
                                <KeyboardArrowRightIcon sx={{ fontSize: "50px" }} />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default NewProduct;