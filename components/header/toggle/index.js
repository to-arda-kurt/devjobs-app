import AppIcons from '../../../common/elements/assets/icons';
import { useTheme } from 'next-themes';

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // TODO toggle swipe for mobile users
  return (
    <div className="toggle">
      <div className="toggle__light">
        <AppIcons icon="Sun" />
      </div>
      <div className="toggle__switch">
        <label className="toggle__switch__mode">
          <input
            type="checkbox"
            checked={theme === 'dark' ? true : false}
            onChange={changeTheme}
          />
          <span className="toggle__switch__mod slider round"></span>
        </label>
      </div>
      <div className="toggle__dark">
        <AppIcons icon="Moon" />
      </div>
    </div>
  );
};

export default Toggle;
