
interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, checked, onChange }:CheckboxProps) => {
  return (
  <div className="checkbox-group">
    <div className="check-box">
      <label>
        <input
          type="checkbox"
          className="check-item"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <span className="check-icon">
          <i className="ic-check"></i>
        </span>
      </label>
    </div>
  </div>
  );
};

export default Checkbox;
