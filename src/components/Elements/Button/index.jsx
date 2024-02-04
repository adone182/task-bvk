const Button = ({
  type = "button",
  children,
  onClick,
  classname = "px-4 bg-transparent text-white border border-white py-1 hover:bg-blue-700",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classname} font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
