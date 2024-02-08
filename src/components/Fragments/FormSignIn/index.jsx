import Button from "../../Elements/Button";
import InputForm from "../../Elements/Input";

const FormSignIn = () => {
  return (
    <form onSubmit={handleSignIn}>
      <InputForm
        type="email"
        name="email"
        placehoder="example@gmail.com"
        title="Email"
        required={true}
      />
      <InputForm
        type="password"
        name="password"
        placehoder="********"
        title="Password"
        required={true}
      />

      <Button classname="bg-blue-700 w-full" type="submit" children="Sign in" />
    </form>
  );
};

export default FormSignIn;
