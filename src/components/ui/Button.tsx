type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
