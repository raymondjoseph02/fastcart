interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  text: string;
}
function AuthButton({
  className,
  text,
}: AuthButtonProps) {
  return (
    <button
      className={`${className}`}
    >
      {text}
    </button>
  );
}

export default AuthButton;
