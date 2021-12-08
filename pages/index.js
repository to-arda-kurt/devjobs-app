import AppHead from '../common/elements/head';
import { useTheme } from 'next-themes';
import CompanyLogo from '../common/elements/assets/logos';
import Header from '../components/header';
import JobList from '../components/joblist';

export default function Home({ jobs }) {
  const { theme, setTheme } = useTheme();

  // TODO: THIS PAGE WILL BE COMPLETELY CHANGED
  return (
    <div className="container">
      <AppHead />
      <Header />

      <main>
        <JobList jobs={jobs} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://192.168.0.18:3000/api/jobs');

  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
  };
};
