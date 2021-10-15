interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  customClassName?: string;
}

const Button = ({
  children,
  fullWidth,
  customClassName,
  ...props
}: ButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >): JSX.Element => {
  return (
    <button
      className={
        fullWidth
          ? `btn btn--primary btn--block ${customClassName}`
          : `btn btn--primary ${customClassName}`
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
