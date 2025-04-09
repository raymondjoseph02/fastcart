import AuthButton from "../components/common/AuthButton"

function PasswordReset() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-[20px]">
    <div className="shadow-bg-auth max-w-[540px] w-full rounded-md bg-white p-[30px] sm:p-[60px] py-12 ">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-gray-300 mb-2 font-bold text-[28px] sm:text-[32px] leading-11">
            Password Reset
        </h1>
        <span className="gap-1.5  flex flex-wrap justify-center">
          <p className="text-gray-100">We Will Help You Reset your Password</p>
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
        <AuthButton />
        <hr className="mt-[48px] border border-gray-200"/>
        <p className="my-[24px] text-gray-100 text-[14px] text-center">Remembered your Password?</p>
        <AuthButton text="Back to Sign in" bg="bg-green-500" textColor="text-primary-200"/>
      </form>
    </div>
  </div>
  )
}

export default PasswordReset
