function AuthButton({
    bg = 'bg-primary-300',
    text = 'Reset Password',
    textColor = 'text-white',
    border = 'border-gray-200',
  }) {
    return (
      <button
        className={`${bg} ${textColor} ${border} border w-full h-[48px] fontFamily-inter fontSize-base rounded-[4px]`}
      >
        {text}
      </button>
    );
  }
  
  export default AuthButton;
  