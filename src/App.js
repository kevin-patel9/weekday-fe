import { Grid, Box } from "@mui/material";
import JobCard from "./Screen/Jobs/Jobs";
import { useEffect, useState } from "react";
import { allJobApi } from "./Api/JobApi";

const App = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const getJobList = async () => {
      const response = await allJobApi();
      setJobListings(response?.jdList);
    };
    getJobList();
  }, []);

  return (
    <Box margin={14} marginTop={4}>
      <Grid container spacing={4}>
        {jobListings?.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
