import Logo from './logo';
import Toggle from './toggle';
import Search from './search';

const Header = () => {
  return (
    <header className="header">
      <div className="app-width">
        <div className="header--upper-row ">
          <Logo />
          <Toggle />
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
