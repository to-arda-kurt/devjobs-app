import { useTheme } from 'next-themes';
import LayoutHeader from '../common/layout';
import JobList from '../components/joblist';

import {
  getDatabase,
  ref,
  query,
  limitToLast,
  get,
  child,
} from 'firebase/database';
import firebase from '../config/firebase';

export default function Home({ jobs }) {
  const { theme, setTheme } = useTheme();

  const firstjob = jobs.find((job) => job.id === 1);

  console.log(firstjob);

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
  console.log(jobList);

  const jobs = jobList;

  return {
    props: {
      jobs,
    },
  };
};
