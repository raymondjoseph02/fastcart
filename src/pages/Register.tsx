import { Link } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
import { Facebook, Google } from "../assets/svg/general";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import AuthHeader from "../components/auth/AuthHeader";

const Register = () => {
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
          title="Create an Account"
          desc="Have an Account?"
          link={RoutePaths.LOG_IN}
          linkText={"Sign In"}
        />

        <form className="mb-6 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div>
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

          <div>
            <label htmlFor="password" className="auth_label">
              Password
            </label>
            <input
              type="password"
              className="auth_input"
              placeholder="Create Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-auth-solid">
            {loading ? (
              <ClipLoader size={15} color="white" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <span className="flex gap-1 justify-center flex-col text-center text-sm">
          <p className="text-gray-100">By creating account, you agree to our</p>
          <Link to={""} className=" text-primary-200 hover:underline ">
            Terms of Service
          </Link>
        </span>

        <hr className="text-primary-150 w-full h-[1px] my-4 sm:my-6" />

        <p className="text-sm text-gray-100 text-center mb-5 sm:mb-[35px]">
          Or create an account using:
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

export default Register;
