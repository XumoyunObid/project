import { Link } from "react-router-dom";
import MainCard from "../../Components/Cards/MainCard";
import { data } from "../../Datas/data";
import useAutoScrollTop from "../../Hooks/UseAutoScrollTop";

const AllProducts = () => {
  useAutoScrollTop();
  return (
    <div className="container my-5">
      <h1 className="text-[36px] mb-10">Products</h1>
      <div className="flex items-center justify-between">
        <button>
          <i className="fa-solid fa-sliders"></i> Filter and sort
        </button>
        <p className="text-sm text-gray-500">{data.length} products</p>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {data?.map((item) => (
          <li
            key={item.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${item.id}00`}
          >
            <Link to={`/product/${item.id}`}>
              <MainCard {...item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
