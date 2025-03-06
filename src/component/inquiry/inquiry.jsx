import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function Inquiry() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Inquiry Submitted Successfully!");
    };

    return (
        <Box sx={{
            maxWidth: 600,
            margin: "auto",
            p: 2,
            backgroundColor: "#fff",
            // position: "relative",  // 👈 Navbar thi niche levava
            marginTop: "40px"  // 👈 Navbar ni upar na chade
        }}>
            {/* Product Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#ece9e4" }}>
                            <TableCell sx={{ fontWeight: "bold" }}>PRODUCT</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>MESSAGE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <img src="https://via.placeholder.com/30" alt="Bacon Chips" style={{ verticalAlign: "middle" }} /> Bacon Chips
                            </TableCell>
                            <TableCell>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    {...register("productMessage")}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Inquiry Form */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                <TextField
                    label="Name *"
                    variant="standard"
                    fullWidth
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField
                    label="Email *"
                    variant="standard"
                    fullWidth
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="Phone *"
                    variant="standard"
                    fullWidth
                    {...register("phone", { required: "Phone number is required" })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                />

                <TextField
                    label="Subject *"
                    variant="standard"
                    fullWidth
                    {...register("subject", { required: "Subject is required" })}
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                />

                <TextField
                    label="Message *"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={3}
                    {...register("message", { required: "Message is required" })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />

                <Button type="submit" variant="contained" sx={{ backgroundColor: "#001444", color: "white", mt: 2 }}>
                    SUBMIT ENQUIRY
                </Button>
            </Box>
        </Box>
    );
}

export default Inquiry;
