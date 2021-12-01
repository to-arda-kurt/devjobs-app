import AppHead from '../common/elements/head';
import { useTheme } from 'next-themes';
import CompanyLogo from '../common/elements/assets/logos';
import Header from '../components/header';

export default function Home({ jobs }) {
  const { theme, setTheme } = useTheme();

  console.log(jobs);

  // TODO: THIS PAGE WILL BE COMPLETELY CHANGED
  return (
    <div className="container">
      <Header />
      <CompanyLogo company="Blogr" />
      <AppHead />
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/jobs');

  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
  };
};
