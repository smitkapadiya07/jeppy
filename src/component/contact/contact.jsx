import React from "react";
import {useForm} from "react-hook-form";
import {Box, Button, Container, TextField, Typography} from "@mui/material";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Box sx={{padding:"60px 0px"}}>
            <Container maxWidth="sm">
                {/* Header Section */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                            color: "black",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            transition: ".3s",

                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Button
                        sx={{
                            backgroundColor: "#02154E",
                            color: "#fff",
                            fontSize: "11px",
                            padding: "6px 14px",
                            letterSpacing: "1px",
                            fontWeight: 600,
                            border: "2px solid transparent",
                            "&:hover": {
                                color: "#02154E",
                                border: "2px solid #02154E",
                                backgroundColor: "white",
                            },
                        }}
                    >
                        FIND US ON GOOGLE MAP
                    </Button>
                </Box>

                {/* Form Section */}
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    {[
                        {name: "companyName", label: "Company Name"},
                        {name: "contactPerson", label: "Contact Person Name"},
                        {name: "contactNo", label: "Contact No."},
                        {name: "email", label: "Email ID"},
                        {name: "query", label: "Query / Remarks"},
                    ].map((field, index) => (
                        <TextField
                            key={index}
                            fullWidth
                            variant="standard"
                            label={field.label}
                            {...register(field.name, {required: true})}
                            error={!!errors[field.name]}
                            helperText={errors[field.name] ? `${field.label} is required` : ""}
                            sx={{
                                mb: 2,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                "& .MuiInputBase-root": {
                                    fontSize: "14px",
                                    textTransform: "uppercase",
                                },
                                "& .MuiInputLabel-root": {
                                    fontSize: "14px",
                                    color: "#B1B1B0",
                                    textTransform: "uppercase",
                                },
                                "& .MuiInput-underline:before": {
                                    borderBottomColor: "#B1B1B0",
                                },
                            }}
                        />
                    ))}

                    {/* Submit Button */}
                    <Button
                        sx={{
                            backgroundColor: "#02154E",
                            color: "#fff",
                            fontSize: "11px",
                            padding: "6px 14px",
                            letterSpacing: "1px",
                            fontWeight: 600,
                            mt:1,
                            border: "2px solid transparent",
                            "&:hover": {
                                color: "#02154E",
                                border: "2px solid #02154E",
                                backgroundColor: "white",
                            },
                        }}
                    >
                        SEND MESSAGE
                    </Button>
                </Box>
            </Container>
        </Box>
    )
        ;
}

export default Contact;