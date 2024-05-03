import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

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
            <Box boxShadow={4} borderRadius={6} height={520} overflow={"hidden"}>
                <CardContent>
                <Box
                    sx={{ textTransform: "capitalize", margin: "10px 0", gap: 1.4, alignItems: "center" }}
                    display="flex"
                >
                    <CardMedia
                        component="img"
                        sx={{ width: 49, height: 49 }}
                        image={job.logoUrl}
                        alt="Company Logo"
                    />
                    <Box>
                        <Typography component="div">{job.companyName}</Typography>
                        <Typography component="body2" color="text.secondary">{job.jobRole}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {job.location}
                        </Typography>
                    </Box>
                </Box>
                {job.minJdSalary ? (
                    <Typography 
                        marginBottom={2} 
                        display={"flex"} 
                        gap={1} 
                        alignItems={"center"} 
                        variant="body2" 
                        color="text.secondary"
                    >
                        Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary}k -{" "}
                    {job.maxJdSalary}k LPA <CheckBoxIcon sx={{ color: "#16C60C" }} />
                    </Typography>
                ) : (
                    <Typography 
                        marginBottom={2} 
                        display={"flex"} 
                        gap={1} 
                        alignItems={"center"} 
                        variant="body2" 
                        color="text.secondary"
                    >
                        Estimated Salary: {job.salaryCurrencyCode} {job.maxJdSalary}k LPA{" "}
                        <CheckBoxIcon sx={{ color: "green" }} />
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
                        background: "white",
                        textAlign: "center",
                    }}
                >
                    <Button sx={{ fontWeight: "600" }} onClick={handleOpen}>View Job</Button>
                </Box>
                {job.minExp &&
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ margin: "14px 0" }}
                    >
                        <Typography variant="subtitle2" color="text.secondary">
                            Minimum Experience
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {job.minExp} years
                        </Typography>
                    </Typography>
                }
                
                <Box sx={{ paddingBottom: 2, marginTop: !job.minExp && 9 }}>
                    <Button
                        fullWidth
                        sx={{ background: "#55efc4", color: "black", fontWeight: "600" }}
                        variant="outlined"
                    >
                    <ElectricBoltIcon sx={{ color: "yellow" }} />
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
