import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// Import movie images
import img1 from "../../assets/HomePage/NewProduct/Img1.jpg";
import img2 from "../../assets/HomePage/NewProduct/Img1.jpg";
import img3 from "../../assets/HomePage/NewProduct/Img1.jpg";
import img4 from "../../assets/HomePage/NewProduct/Img1.jpg";
import img5 from "../../assets/HomePage/NewProduct/Img1.jpg";
const movies = [
    {image: img1,  },
    { image: img2,  },
    {image: img3, },
    {image: img4, },
    {image: img5, },
];
const MovieCarousel = () => {
    return (
        <Box sx={{ width: "100%", textAlign: "center", padding: "50px 0" }}>
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                    marginBottom: 4,
                    color: "#fff",
                    fontSize: "36px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                }}
            >
                Movie Carousel
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, // Added for better UX
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 3,
                    }}
                    pagination={{ clickable: true }} // Enable pagination
                    modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
                    style={{ width: "70%", padding: "30px 0" }}
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                }}
                            >
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%", // Ensure the overlay spans the entire width
                                        // background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                        color: "#fff",
                                        padding: "15px",
                                        transform: "translateY(0%)",
                                        transition: "0.5s",
                                        '&:hover': {
                                            transform: "translateY(-20%)",
                                        }
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2">{movie.description}</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};
export default MovieCarousel;