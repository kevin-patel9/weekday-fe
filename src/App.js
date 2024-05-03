import { Grid, Box } from "@mui/material";
import JobCard from "./Screen/Jobs/Jobs";
import { useEffect, useState } from "react";
import { allJobApi } from "./Api/JobApi";
import Select from "react-select";
import { experienceOptions, roleOptions, salaryOptions, workOptions } from "./components/FilteredOption";

const App = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const getJobList = async () => {
      const response = await allJobApi();
      setJobListings(response?.jdList);
      setFilteredJobs(response?.jdList);
    };
    getJobList();
  }, []);

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);

  // store selected filtered option accordingly
  const handleRoleChange = (selected) => {
    setSelectedRoles(selected.map((option) => option.value));
  };
  const handleExperienceChange = (selected) => {
    setSelectedExperience(selected.map((option) => option.value));
  };
  const handleLocationChange = (selected) => {
    setSelectedLocation(selected.map((option) => option.value));
  };
  const handleSalaryChange = (selected) => {
    setSelectedSalary(selected.map((option) => option.value));
  };

  // Filter data on every filter selected option (trigger on dependecy change)
  useEffect(() => {
    function filterJob() {
      return jobListings.filter((job) => {
        if (selectedExperience.length > 0 && !selectedExperience.includes(job.minExp?.toString()))
          return false;
        if (selectedRoles.length > 0 && !selectedRoles.includes(job.jobRole))
          return false;
        if (selectedLocation.length > 0 && !selectedLocation.includes(job.location))
          return false;
        if (selectedSalary.length > 0 && !selectedSalary.some(salary => job.minJdSalary > parseInt(salary)))
          return false;
      
        return true;
      });
    }
  
    const filteredJobs = filterJob();
    setFilteredJobs(filteredJobs);
  }, [selectedSalary, selectedExperience, selectedRoles, selectedLocation]);
  

  return (
    <Box margin={14} marginTop={4}>
      <Grid container gap={1.4} marginBottom={2}>
        <Select
          placeholder="Roles"
          onChange={handleRoleChange}
          options={roleOptions}
          isMulti
        />
        <Select
          placeholder="Experience"
          onChange={handleExperienceChange}
          options={experienceOptions}
          isMulti
        />
        <Select
          placeholder="Remote"
          onChange={handleLocationChange}
          options={workOptions}
          isMulti
        />
        <Select
          placeholder="Minimum Base Pay Salary"
          onChange={handleSalaryChange}
          options={salaryOptions}
          isMulti
        />
      </Grid>
      {/* All Cards List*/}
      <Grid container spacing={4}>
        {filteredJobs?.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
