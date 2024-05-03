import { Grid, Box } from "@mui/material";
import JobCard from "./Screen/Jobs/Jobs";
import { useEffect, useState } from "react";
import { allJobApi } from "./Api/JobApi";
import Select from "react-select";

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

  const roleOptions = [
    { value: "backend", label: "Backend" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Fullstack" },
    { value: "ios", label: "IOS" },
    { value: "flutter", label: "Flutter" },
    { value: "react-native", label: "React Native" },
    { value: "android", label: "Android" },
  ];

  // Experience
  const experienceOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  // Work Options
  const workOptions = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "in-office", label: "In-office" },
  ];

  // Minimum Salary
  const salaryOptions = [
    { value: "10", label: "$10k" },
    { value: "20", label: "$20k" },
    { value: "30", label: "$30k" },
    { value: "40", label: "$40k" },
    { value: "50", label: "$50k" },
    { value: "60", label: "$60k" },
    { value: "70", label: "$70k" },
    { value: "80", label: "$80k" },
    { value: "90", label: "$90k" },
  ];

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);

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
