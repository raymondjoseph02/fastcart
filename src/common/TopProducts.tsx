import hoodie from "../assets/images/hoodie.png";
import stripedShirt from "../assets/images/stripedShirt.png";
import womenTshirt from "../assets/images/womenTshirt.png";
import menTshirt from "../assets/images/menTshirt.png";
import womenRedTshirt from "../assets/images/womenRedTshirt.png";
type Product = {
  image: string;
  name: string;
  price: string;
  unitsSold: number;
};

const products: Product[] = [
  {
    image: hoodie,
    name: "Men Grey Hoodie",
    price: "$49.90",
    unitsSold: 204,
  },
  {
    image: stripedShirt,
    name: "Women Striped T-Shirt",
    price: "$34.90",
    unitsSold: 155,
  },
  {
    image: womenTshirt,
    name: "Women White T-Shirt",
    price: "$40.90",
    unitsSold: 120,
  },
  {
    image: menTshirt,
    name: "Men White T-Shirt",
    price: "$49.90",
    unitsSold: 204,
  },
  {
    image: womenRedTshirt,
    name: "Women Red T-Shirt",
    price: "$34.90",
    unitsSold: 155,
  },
];

const TopProducts: React.FC = () => {
  return (
    <div className="w-full  shadow-bg-auth rounded-md p-7 border border-gray-50 text-nowrap bg-white">
      <h2 className="text-base mb-5 text-gray-300 font-bold">
        Top Products by Units Sold
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-100 border-b-2 border-gray-150 h-11  justify-between">
              <th className="pb-2 px-2 font-normal">Name</th>
              <th className="pb-2 px-4 font-normal">Price</th>
              <th className="pb-2 px-4 font-normal">Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr
                key={i}
                className="border-b last:border-b-0 border-gray-200 h-[3.25rem] text-gray-300 py-2 font-normal"
              >
                <td className="flex flex-wrap items-center gap-3 py-2 px-2  ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">{product.unitsSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
