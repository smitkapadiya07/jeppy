import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Contact() {

    const [showMap, setShowMap] = useState(false);

    const handleRedirect = () => {
        window.open(
            "https://www.google.com/maps/place/Jeppy/@22.2670016,70.797555,13z/",
            "_blank"
        );
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Box sx={{ padding: "60px 0px" }}>
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
                        onClick={handleRedirect} // Opens Google Maps in new tab
                    >
                        FIND US ON GOOGLE MAP
                    </Button>

                    {showMap && (
                        <Box mt={2} display="flex" justifyContent="center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59076.64014482902!2d70.797555!3d22.2670016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b584d2aba6c3%3A0xfa831224b3c5ed4a!2sJeppy!5e0!3m2!1sen!2sin!4v1740738443251!5m2!1sen!2sin"
                                width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    )}
                </Box>

                {/* Form Section */}
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    {[
                        { name: "companyName", label: "Company Name" },
                        { name: "contactPerson", label: "Contact Person Name" },
                        { name: "contactNo", label: "Contact No." },
                        { name: "email", label: "Email ID" },
                        { name: "query", label: "Query / Remarks" },
                    ].map((field, index) => (
                        <TextField
                            key={index}
                            fullWidth
                            variant="standard"
                            label={field.label}
                            {...register(field.name, { required: `${field.label} is required` })}
                            error={!!errors[field.name]}
                            helperText={errors[field.name]?.message || ""}
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
                        type="submit"
                        sx={{
                            backgroundColor: "#02154E",
                            color: "#fff",
                            fontSize: "11px",
                            padding: "6px 14px",
                            letterSpacing: "1px",
                            fontWeight: 600,
                            mt: 1,
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
    );
}

export default Contact;