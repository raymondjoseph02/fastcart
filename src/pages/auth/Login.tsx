import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/RoutesPath";
import { Check, Facebook, Google } from "../../assets/svg/general";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import AuthHeader from "../../components/auth/AuthHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("email: " + email, "password: " + password);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full sm:min-h-screen flex justify-center items-center p-5">
      <div className="shadow-bg-auth max-w-[540px] w-full rounded-md bg-white px-6 py-10 sm:px-[60px] sm:py-12  ">
        <AuthHeader
          title="Sign In"
          desc="New to Our Product?"
          link={RoutePaths.REGISTER}
          linkText={"Create an Account"}
        />

        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="email" className=" auth_label">
              Email
            </label>
            <input
              type="email"
              className="auth_input"
              placeholder="Enter Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="auth_label">
              Password
            </label>
            <input
              type="password"
              className="auth_input"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center mb-4 transition-all ease-in gap-x-2 ">
            <input
              type="checkbox"
              id="confirm-request"
              className="relative w-5 outline-none h-5 border border-primary-150 rounded appearance-none peer shrink-0  checked:bg-primary-300 checked:border-0 hover:cursor-pointer"
            />
            <Check className="absolute hidden w-3 h-3 mt-[0.7px] ml-[4.55px] outline-none pointer-events-none peer-checked:block stroke-white " />

            <label
              htmlFor="confirm-request"
              className="text-sm text-gray-100 cursor-pointer hover:scale-[103%] transition-transform duration-300 ease-linear"
            >
              Keep me signed in
            </label>
          </div>

          <button className="btn-auth-solid">
            {loading ? <ClipLoader size={15} color="white" /> : "Sign in"}
          </button>
        </form>

        <span className="flex justify-center text-center">
          <Link
            to={RoutePaths.FORGOT_PASSWORD}
            className="text-sm text-primary-200 hover:underline "
          >
            Forgot your password?
          </Link>
        </span>

        <hr className="text-primary-150 w-full h-[1px] my-4 sm:my-6" />

        <p className="text-sm text-gray-100 text-center mb-5 sm:mb-[35px]">
          Or sign in using:
        </p>

        <button className="btn-auth-outline mb-3">
          <Google /> Continue with Google
        </button>
        <button className="btn-auth-outline ">
          <Facebook /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
