import JobList from '../components/joblist';

import { getDatabase, ref, get, child } from 'firebase/database';
import firebase from '../config/firebase';

export default function Home({ jobs }) {
  // TODO: THIS PAGE WILL BE COMPLETELY CHANGED
  return (
    <div className="container">
      <main>
        <JobList jobs={jobs} />
        <p></p>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = getDatabase(firebase);
  const jobListRef = ref(database);
  let jobList = [];
  await get(child(jobListRef, 'jobs/')).then((snapshot) => {
    snapshot.forEach((jobChildSnapshot) => {
      jobList.push(jobChildSnapshot.val());
    });
  });

  const jobs = jobList;
  console.log(jobs);
  return {
    props: {
      jobs,
    },
  };
};
