import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Icon from "./Icon";

interface InputProps {
  id: string;
  name: string;
  className?: string;
  icon?: IconDefinition;
  placeholder?: string;
  required?: boolean;
  value: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  id,
  name,
  className,
  icon,
  placeholder,
  required,
  value,
  type,
  onChange,
}: InputProps) => {
  return (
    <div className="relative">
      <Icon
        iconName={icon}
        className="absolute left-3  h-4 w-4 text-slate-400"
      />
      <input
        id={id}
        type={type}
        name={name}
        className={`border border-slate-200 rounded-sm w-full ${
          icon ? "pl-9" : "pl-2"
        } ${className ?? ""}`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
