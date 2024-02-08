import InputForm from "../../Elements/Input";
import Button from "../../Elements/Button";
import { useState } from "react";

const FormSignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    const fullname = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm_password = event.target.confirm_password.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (password !== confirm_password) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", hashedPassword);
    localStorage.setItem("confirm_password", confirm_password);
    window.location.href = "/signin";
  };

  return (
    <form onSubmit={handleSignUp}>
      <InputForm
        title="FullName"
        name="fullname"
        type="text"
        placehoder="Please insert your fullname"
        required={true}
      />
      <InputForm
        title="Email"
        name="email"
        type="email"
        placehoder="example@gmail.com"
        required={true}
      />
      <InputForm
        title="Password"
        name="password"
        type="password"
        placehoder="********"
        required={true}
      />
      <InputForm
        title="Confirm Password"
        name="confirm_password"
        type="password"
        placehoder="********"
        required={true}
      />

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <Button classname="bg-blue-700 w-full" children="Sign up" type="submit" />
    </form>
  );
};

export default FormSignUp;
