import { Link } from "react-router-dom";
interface ImageCardProps {
  title: string;
  className?: string;
  text?: string;
  link?: string;
}

const Card: React.FC<ImageCardProps> = ({
  title,
  className = "",
  text = "",
  link=""
}) => {
  return (
    <div className={`p-7 bg-white h-44 w-full rounded-md ${className}`}>
        <h3 className="text-xl font-bold text-gray-300">{title}</h3>
        <p className="mt-3 mb-4 text-sm text-gray-300 max-w-100">{text}</p>
        <Link to="/knowledge-base" className="text-sm text-primary-200">{link}</Link>
    </div>
  );
};

export default Card;
