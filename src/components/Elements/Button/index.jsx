const Button = ({
  children,
  onClick,
  classname = "text-white border border-white py-1 hover:bg-blue-700",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classname} bg-transparent font-medium px-4`}
    >
      {children}
    </button>
  );
};

export default Button;
