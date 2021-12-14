import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JobCard = ({ job }) => {
  console.log();

  return (
    <div className="joblist__card">
      <Link href={`/job/${job.id}`}>
        <a>
          <div className="joblist__card__wrapper">
            <div
              className="joblist__card__wrapper__logo"
              //   Dynamic Background
              //   TODO: Fix Sizing
              style={{
                backgroundColor: job.logoBackground,
              }}
            >
              <Image
                src={job.logo}
                alt={job.company}
                objectFit="contain"
                width="35px"
                height="100%"
              />
            </div>
            <div className="joblist__card__wrapper__info">
              <p>
                {job.postedAt} - {job.contract}{' '}
              </p>
              <h3>
                {job.position.length >= 28
                  ? job.position.substring(0, 25) + '...'
                  : job.position}
              </h3>
              <p>{job.company}</p>
              <h4>{job.location}</h4>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default JobCard;
