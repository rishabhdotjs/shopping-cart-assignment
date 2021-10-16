import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import WarningIcon from '../shared/Icons/Warning';

interface InputProps<T> {
  label: Path<T>;
  register: UseFormRegister<T>;
  name: string;
  error?: FieldError | undefined;
}

function Input<T>({
  name,
  label,
  register,
  error,
  type,
  ...rest
}: InputProps<T> &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >): JSX.Element {
  return (
    <div className="form__group">
      {error && (
        <p role="alert" className="form__error">
          <WarningIcon /> {error?.message}
        </p>
      )}
      <input
        type={type}
        id={name}
        {...register(label)}
        name={name}
        {...rest}
        aria-invalid={error ? 'true' : 'false'}
      />
      <label htmlFor={name} aria-hidden="true">
        {label}
      </label>
    </div>
  );
}

export default Input;
