type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  customClassName?: string;
};

const Button = ({
  children,
  fullWidth,
  disabled = false,
  customClassName,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={
        fullWidth
          ? `btn btn--primary btn--block ${customClassName}`
          : `btn btn--primary ${customClassName}`
      }
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
