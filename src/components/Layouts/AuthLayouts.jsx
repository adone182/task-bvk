import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, subtitle, children, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-700 text-3xl font-bold mb-2">{title}</h1>
        <p className="text-slate-400 font-regular text-md mb-8">{subtitle}</p>

        {children}

        <p className="text-sm text-center mt-5">
          {type === "signin"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "signin" ? (
            <Link to="/signup" className="text-blue-600 font-semibold">
              {" "}
              Sign Up
            </Link>
          ) : (
            <Link to="/signin" className="text-blue-600 font-semibold">
              {" "}
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
