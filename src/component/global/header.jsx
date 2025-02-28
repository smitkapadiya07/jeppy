import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Header({title}) {

    const navigate = useNavigate();

    return (
        <Box sx={{backgroundColor: "#004c7e", padding: "40px 0", color: "white"}}>
            <Container maxWidth={"lg"}>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Box className={"OpenSans"}
                             sx={{
                                 fontWeight: "600",
                                 textTransform: "uppercase",
                                 fontSize: "18px",
                                 color: "#fff",
                                 lineHeight: "23px",
                                 letterSpacing: "4px",
                             }}>
                            {title}
                        </Box>
                    </Grid>

                    <Grid item xs={4} sx={{textAlign: "right"}}>
                        <Box
                            className={"OpenSans"}
                            sx={{
                                fontSize: "14px",
                                textTransform: "uppercase",
                                fontWeight: "400",
                                letterSpacing: "2px",
                                lineHeight: "23px",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/")}
                        >Home
                            <span
                                style={{
                                    padding: "0 10px"
                                }}
                            >|
                            </span>
                            {title}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Header;
