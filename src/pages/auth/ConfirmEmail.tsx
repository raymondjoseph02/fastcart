import AuthButton from "../../common/AuthButton";

function ConfirmEmail() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-[20px]">
      <div className="shadow-bg-auth max-w-[540px] w-full rounded-md bg-white p-[30px] sm:p-[60px] py-12 ">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-gray-300 mb-2 font-bold text-[28px] sm:text-[32px] leading-11">
            Confirm Email
          </h1>
          <span className="gap-1.5  flex flex-wrap justify-center">
            <p className="text-gray-100">
              Check Your Email and Enter Confirmation Code
            </p>
          </span>
        </div>

        <form className="">
          <div className="mb-6">
            <label htmlFor="email" className=" auth_label">
              Confirmation Code
            </label>
            <input
              type="number"
              className="auth_input"
              placeholder="Enter Code"
              required
            />
          </div>
          <AuthButton text="Confirm Email" className="btn-auth-solid" />
          <hr className="text-primary-150 w-full h-[1px] my-4 sm:my-6" />
          <p className="my-[24px] text-gray-100 text-[14px] text-center">
            Haven’t received your code?
          </p>
          <AuthButton text="Resend Code" className="btn-auth-outline" />
        </form>
      </div>
    </div>
  );
}

export default ConfirmEmail;
