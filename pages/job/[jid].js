import { useRouter } from 'next/router';
import LayoutHeader from '../../common/layout';

const Job = () => {
  const router = useRouter();
  const { jid } = router.query;

  return <>Job: {jid}</>;
};

export default Job;
