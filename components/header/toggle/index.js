import AppIcons from '../../../common/elements/assets/icons';

const Toggle = () => {
  return (
    <div className="toggle">
      <div className="toggle--light">
        <AppIcons icon="Sun" />
      </div>
      <div className="toggle--switch">
        <label className="toggle--switch__mode">
          <input type="checkbox" />
          <span className="toggle--switch__mod slider round"></span>
        </label>
      </div>
      <div className="toggle--dark">
        <AppIcons icon="Moon" />
      </div>
    </div>
  );
};

export default Toggle;
