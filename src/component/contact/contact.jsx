import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Container, Grid, TextField, Typography, MenuItem, Checkbox, FormControlLabel } from "@mui/material";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // Reset form after successful submission
    } = useForm({ mode: "onBlur" });

    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(""); // Error state
    const [success, setSuccess] = useState(""); // Success state

    const onSubmit = async (data) => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            // Create payload with only required fields
            const payload = {
                name: data.name,
                surname: data.surname,
                contact: data.contact,
                company: data.company || "", // Optional field
                email: data.email,
                request: data.request,
                your_message: data. your_message,
            };

            const response = await fetch("https://valin-backend.onrender.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Something went wrong! Please try again.");
            }

            const result = await response.json();
            console.log("Response:", result);

            setSuccess("Your message has been sent successfully!");
            reset(); // Reset form after success
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {/* Left Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ color: "#0033A1", fontWeight: "500", mb: 2 }}>
                        Inquiries
                    </Typography>
                    <Typography sx={{ color: "#333", mb: 3, width: "400px" }}>
                        We establish a relationship to realize your business vision by providing next-generation solutions for your snacks, with a tailored approach.
                    </Typography>
                </Grid>

                {/* Right Section - Form */}
                <Grid item xs={12} md={6}>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    {...register("name", { required: "Name is required" })}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Surname"
                                    variant="outlined"
                                    {...register("surname", { required: "Surname is required" })}
                                    error={!!errors.surname}
                                    helperText={errors.surname?.message}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    variant="outlined"
                                    {...register("contact", { required: "Phone is required" })}
                                    error={!!errors.contact}
                                    helperText={errors.contact?.message}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    label="Company"
                                    variant="outlined"
                                    {...register("company")}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    {...register("email", { required: "Email is required" })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Request"
                                    variant="outlined"
                                    {...register("request", { required: "Request is required" })}
                                    error={!!errors.request}
                                    helperText={errors.request?.message}
                                >
                                    <MenuItem value="general">General Inquiry</MenuItem>
                                    <MenuItem value="support">Customer Support</MenuItem>
                                    <MenuItem value="feedback">Feedback</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    {...register("your_message", { required: "Message is required" })}
                                    error={!!errors. your_message}
                                    helperText={errors. your_message?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox {...register("privacy", { required: "You must agree to continue" })} />}
                                    label={
                                        <Typography variant="body2">
                                            By using this form you agree with the storage and handling of your data by this website.
                                            <Typography variant="h7" fontWeight="bold"> Read the Privacy Policy</Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>

                            {/* Error / Success Message */}
                            <Grid item xs={12}>
                                {error && <Typography color="error">{error}</Typography>}
                                {success && <Typography color="green">{success}</Typography>}
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    sx={{
                                        backgroundColor: "#0033A1",
                                        color: "#fff",
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        padding: "15px 30px",
                                        transition: "0.3s",
                                        border: "1px solid #0033A1",
                                        "&:hover": {
                                            backgroundColor: "white",
                                            color: "#0033A1",
                                            border: "1px solid rgba(0, 51, 161, 0.5)",
                                        },
                                    }}
                                >
                                    {loading ? "Sending..." : "Send message"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contact;
