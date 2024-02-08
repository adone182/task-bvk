import FormSignUp from "../component/Fragments/FormSignUp";
import AuthLayouts from "../component/Layouts/AuthLayouts";

const SignUpPage = () => {
  return (
    <AuthLayouts
      title="Sign Up"
      subtitle="Please, Enter with your valid identity!!!"
      type="signup"
    >
      <FormSignUp />
    </AuthLayouts>
  );
};

export default SignUpPage;
