import React from 'react';

const JobCard = ({ job }) => {
  return <div className="joblist__card">{job.company}</div>;
};

export default JobCard;
