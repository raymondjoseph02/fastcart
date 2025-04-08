import { Link } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
// import { Check } from "../assets/svg/general";
// import { useState } from "react";

const Login = () => {
  // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // const handleSubmit = () => {};

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="shadow-bg-auth max-w-[540px] w-full rounded-md bg-white p-[60px] py-12 ">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-gray-300 mb-2 font-bold text-[32px] leading-11">
            Sign In
          </h1>
          <span className="gap-1.5  flex flex-wrap justify-center">
            <p className="text-gray-100">New to Our Product?</p>
            <Link to={RoutePaths.REGISTER} className="text-primary-200">
              Create an Account
            </Link>
          </span>
        </div>

        <form className="">
          <div className="mb-6">
            <label htmlFor="email" className=" auth_label">
              Email
            </label>
            <input
              type="email"
              className="auth_input"
              placeholder="Enter Email Address"
              required
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
            />
          </div>

          {/* <div className="flex items-start mb-4 transition-all ease-in gap-x-2">
            <input
              type="checkbox"
              id="confirm-request"
              className="relative w-[16px] h-[16px] bg-white border-2 border-lightNeutral-base rounded-[3px] appearance-none peer shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-lightNeutral-base checked:bg-brandGreen-base checked:border-0 disabled:border-steel-400 disabled:bg-steel-400 hover:cursor-pointer"
              required
              onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            />
            <Check className="absolute hidden w-[9px] h-[9px] mt-[2.5px] ml-[3.5px] outline-none pointer-events-none peer-checked:block stroke-white " />

            <label
              htmlFor="confirm-request"
              className="text-xs text-darkNeutral-dark1 tracking-[0.24px] leading-4"
            >
              Keep me signed in
            </label>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
