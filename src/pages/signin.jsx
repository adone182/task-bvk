import FormSignIn from "../component/Fragments/FormSignIn";
import AuthLayouts from "../component/Layouts/AuthLayouts";

const SignInPage = () => {
  return (
    <AuthLayouts
      title="Sign In"
      subtitle="Welcome, Please insert your identity!"
      type="signin"
    >
      <FormSignIn />
    </AuthLayouts>
  );
};

export default SignInPage;
