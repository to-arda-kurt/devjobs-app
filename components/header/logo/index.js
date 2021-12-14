import CompanyLogo from '../../../common/elements/assets/logos';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a>
          <CompanyLogo company="Devjobs" />
        </a>
      </Link>
    </>
  );
};

export default Logo;
