import { useRouter } from 'next/router';
import LayoutHeader from '../../common/layout';

import { getDatabase, ref, get, child, onValue } from 'firebase/database';
import firebase from '../../config/firebase';

export default function Job({ job }) {
  const router = useRouter();
  const { jid } = router.query;

  console.log(job);
  return <>Job: {job.company}</>;
}

export const getStaticProps = async (context) => {
  let job = [];
  console.log(context.params.jid);
  const database = getDatabase(firebase);
  const jobRef = ref(database);

  // TODO bring the job list not index but id this needs refactor
  const postId = context.params.jid - 1;
  await get(child(jobRef, 'jobs/' + postId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const jobData = snapshot.val();
        job = jobData;
      } else {
        console.log('No Data');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return {
    props: {
      job,
    },
  };
};

export const getStaticPaths = async () => {
  // TODO: WILL BE MOVE TO REDUX STORE

  const database = getDatabase(firebase);
  const jobListRef = ref(database);
  let jobList = [];
  await get(child(jobListRef, 'jobs/')).then((snapshot) => {
    snapshot.forEach((jobChildSnapshot) => {
      jobList.push(jobChildSnapshot.val());
    });
  });

  const paths = jobList.map((job) => {
    return {
      params: { jid: `${job.id}` },
    };
  });

  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
};
