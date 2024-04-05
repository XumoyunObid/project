import { Link } from "react-router-dom";
import MainCard from "../../Components/Cards/MainCard";
import { data } from "../../Datas/data";

const AllProducts = () => {
  return (
    <div className="container my-10">
      <h1 className="text-[48px] mb-10">Products</h1>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {data?.map((item) => (
          <li key={item.id}>
            <Link>
              <MainCard {...item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
