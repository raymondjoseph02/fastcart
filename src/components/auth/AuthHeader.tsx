import { Link } from "react-router-dom";
interface AuthHeader {
  title: string;
  desc: string;
  link?: string;
  linkText?: string;
}

const AuthHeader = ({ desc, title, link, linkText }: AuthHeader) => {
  return (
    <div className="text-center mb-5 md:mb-10">
      <h1 className="text-gray-300 mb-2 font-bold  text-2xl md:text-[32px] leading-11">
        {title}
      </h1>
      <span className="gap-1.5  flex flex-wrap justify-center text-sm md:text-base">
        <p className="text-gray-100">{desc}</p>
        {link && linkText && (
          <Link to={link} className="text-primary-200 hover:underline ">
            {linkText}
          </Link>
        )}
      </span>
    </div>
  );
};

export default AuthHeader;
