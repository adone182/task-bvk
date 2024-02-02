const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border hover:bg-blue-700 text-white font-bold py-2 px-4 "
    >
      {children}
    </button>
  );
};

export default Button;
