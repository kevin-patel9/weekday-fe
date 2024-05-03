import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const JobCard = ({ job }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box boxShadow={4} borderRadius={6} height={490} position="relative">
                <CardContent>
                <Typography variant="div" color="text.secondary">
                    6 days ago
                </Typography>
                <Box
                    sx={{ textTransform: "capitalize", margin: "10px 0" }}
                    display="grid"
                >
                    <Typography component="div">{job.jobRole}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    {job.location}
                    </Typography>
                </Box>
                {job.minJdSalary ? (
                    <Typography marginBottom={2} variant="body2" color="text.secondary">
                    Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary} -{" "}
                    {job.maxJdSalary}
                    </Typography>
                ) : (
                    <Typography marginBottom={2} variant="body2" color="text.secondary">
                    Estimated Salary: {job.salaryCurrencyCode} {job.maxJdSalary}
                    </Typography>
                )}
                <Typography variant="body2" component="div">
                    {/* About the Company section */}
                    <Typography variant="subtitle2" color="text.secondary">
                    About Company:
                    </Typography>
                    <Typography variant="body2">
                    {job.jobDetailsFromCompany.slice(0, 440)}
                    </Typography>
                </Typography>
                <Box
                    sx={{
                    position: "absolute",
                    background: "white",
                    width: 320,
                    opacity: 0.9,
                    textAlign: "center",
                    }}
                    position="absolute"
                    bottom={120}
                >
                    <Button onClick={handleOpen}>View Job</Button>
                </Box>
                <Typography
                    position="absolute"
                    bottom={69}
                    variant="body2"
                    component="div"
                >
                    <Typography variant="subtitle2" color="text.secondary">
                    Minimum Experience
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {job.minExp} years
                    </Typography>
                </Typography>
                <Box position="absolute" bottom={0} paddingBottom={2} width={320}>
                    <Button
                    fullWidth
                    sx={{ background: "#55efc4", color: "black", fontWeight: "600" }}
                    variant="outlined"
                    >
                    Easy Apply
                    </Button>
                </Box>
                </CardContent>
            </Box>
            {/* Modal */}
            <Modal open={open} onClose={handleClose}>
                <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    borderRadius: 6,
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                }}
                >
                    <Typography variant="div" color="text.secondary">
                        6 days ago
                    </Typography>
                    <Box
                        sx={{ textTransform: "capitalize", margin: "10px 0" }}
                        display="grid"
                    >
                        <Typography component="div">{job.jobRole}</Typography>
                        <Typography variant="body2" color="text.secondary">
                        {job.location}
                        </Typography>
                    </Box>
                    {job.minJdSalary ? (
                        <Typography marginBottom={2} variant="body2" color="text.secondary">
                        Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary} -{" "}
                        {job.maxJdSalary}
                        </Typography>
                    ) : (
                        <Typography marginBottom={2} variant="body2" color="text.secondary">
                        Estimated Salary: {job.salaryCurrencyCode} {job.maxJdSalary}
                        </Typography>
                    )}
                    <Typography variant="body2" component="div">
                        {/* About the Company section */}
                        <Typography variant="subtitle2" color="text.secondary">
                        About Company:
                        </Typography>
                        <Typography variant="body2">
                        {job.jobDetailsFromCompany}
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default JobCard;
