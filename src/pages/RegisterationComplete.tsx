import AuthButton from "../components/common/AuthButton"
import Mail from "../assets/images/mail.png"
function RegisterationComplete() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-[20px]">
    <div className="shadow-bg-auth max-w-[540px] w-full rounded-md bg-white p-[30px] sm:p-[60px] py-12 ">
        <img src={Mail} alt="mail image" className="w-[140px] h-[140px] mx-auto "/>
      <div className="text-center mt-[40px] mb-10">
        <h1 className="text-gray-300 font-bold text-[28px] sm:text-[32px]">
           Almost There!
        </h1>
        <span className="gap-1.5  flex flex-wrap justify-center mt-[8px]">
          <p className="text-gray-100">Check your email inbox and confirm your account</p>
        </span>
      </div>
        <hr className="mt-[48px] border border-gray-200"/>
        <p className="my-[24px] text-gray-100 text-[14px] text-center">Didn’t receive any mail?</p>
        <AuthButton text="Resend Confirmation" bg="bg-green-500" textColor="text-primary-200"/>
    </div>
  </div>
  )
}

export default RegisterationComplete
