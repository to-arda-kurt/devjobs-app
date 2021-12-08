import React from 'react';
import JobCard from './jobcard';

const JobList = ({ jobs }) => {
  return (
    <>
      <div className="joblist">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
