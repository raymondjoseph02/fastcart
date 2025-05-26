import { Link } from "react-router-dom";

interface ImageCardProps {
  imageSrc: string;
  altText?: string;
  title: string;
  className?: string;
  listItems?: string[]; // <-- Use an array instead
}

const Card: React.FC<ImageCardProps> = ({
  imageSrc,
  altText = "Card image",
  title,
  className = "",
  listItems = [], // <-- Default to an empty array
}) => {
  return (
    <div className={`p-7 bg-white h-100 w-full overflow-hidden rounded-md ${className}`}>
      <img src={imageSrc} alt={altText} className="size-36 m-auto" />
      <div className="mt-7">
        <h3 className="text-xl font-bold text-gray-300">{title}</h3>
        <ul className="my-5 text-gray-300 text-sm space-y-3">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to="/knowledge-base/getting-started" className="text-sm text-primary-200">
          More Tutorials
        </Link>
      </div>
    </div>
  );
};

export default Card;


