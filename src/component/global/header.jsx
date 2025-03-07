'use client'
import React from 'react';
import { Box } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Header({bgImg ,heading , breadcrumbs , description}) {
    // const router = useRouter();
    console.log(bgImg,"000000000000");

    return (
        <Box>

            <Box sx={{
                background: `url(${bgImg}) no-repeat center center`,
                backgroundSize: 'cover',
                height: { xs: '388px', sm: "407px", lg: "588px" },
                width: "100%",
                position: "relative",
                padding: { lg: "274px 0px 26px 0px", md: "70px 0px 50px 0px" },
            }}>

                {/*<Box sx={{*/}
                {/*    position: "absolute",*/}
                {/*    top: 0,*/}
                {/*    left: 0,*/}
                {/*    width: "100%",*/}
                {/*    height: "100%",*/}
                {/*    backgroundColor: "rgba(0, 0, 0, 0.4)",*/}
                {/*    zIndex: 1,*/}
                {/*}} />*/}

                <Box
                    sx={{
                        fontWeight: "700",
                        fontSize: { xs: "45px", sm: "50px", md: "50px", lg: "65px", xl: "70px" },
                        color: "#FFFFFF",
                        padding: "15px",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        width: "100%",
                        maxWidth: { xs: "90%", sm: "70%", md: "60%", lg: "60%", xl: "50%" },
                        mx: "auto",
                        my: { xs: "-20px", sm: "-10px", md: "50px", lg: "-100px", xl: "-140px" },
                    }}
                >
                    {description}
                </Box>



                <Box sx={{
                    fontWeight: "700",
                    fontSize: { md: "80px", xs: "40px" },
                    position: "absolute",
                    bottom: { md: "33%", xs: "25%" ,sm:"40%" },
                    transform: { xs: 'translateY(-50%)', sm: 'unset' },
                    left: { xs: '5%', md: "50px" },
                    color: "#fff",
                    padding: "15px",
                    zIndex: 1,

                }}>
                    {heading}
                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        width: "50px",*/}
                    {/*        height: "2px",*/}
                    {/*        backgroundColor: "white",*/}
                    {/*        mt:"10px",*/}
                    {/*        bottom:{marginBottom:".5px"}*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<Box sx={{maxWidth: "100%",*/}
                    {/*    height: ".5px",*/}
                    {/*    backgroundColor: "#5A6168",*/}
                    {/*    margin: "0 0 25px",*/}
                    {/*    display:"flex",*/}
                    {/*    alignItems:"center",*/}
                    {/*}}*/}
                    {/*/>*/}


                    <Box sx={{
                        fontWeight: "500",
                        fontSize: { xs: "15px" },
                        color: "white",
                        display: "flex",
                        mt: { md: "45px", sm: "15px" },
                    }}>
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <Box
                                    component="a"
                                    onClick={() => router.push(crumb.route)}
                                    sx={{
                                        textDecoration: "none",
                                        color: "white",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {crumb.label}
                                </Box>
                                {index < breadcrumbs.length - 1 && (
                                    <Box sx={{
                                        padding: "0 15px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}>
                                        <TrendingFlatIcon />
                                    </Box>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
                {/*<Box sx={{*/}
                {/*    fontWeight: "700",*/}
                {/*    fontSize: { md: "80px", xs: "40px" },*/}
                {/*    // position: "absolute",*/}
                {/*    // bottom: { md: "33%", xs: "25%" ,sm:"40%" },*/}
                {/*    transform: { xs: 'translateY(-50%)', sm: 'unset' },*/}
                {/*    // left: { xs: '5%', md: "50px" },*/}
                {/*    color: "#fff",*/}
                {/*    padding: "15px",*/}
                {/*    zIndex: 1,*/}
                {/*    display:"flex",*/}
                {/*    justifyContent: "center",*/}
                {/*    width: "70%",*/}

                {/*}}>*/}
                {/*    {description}*/}
                {/*</Box>*/}
            </Box>
        </Box>
    );
}

export default Header;
