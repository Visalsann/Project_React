// Product.jsx
import { forwardRef, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = forwardRef((props, ref) => {
  const { Coffee } = useContext(ProductContext);

  const getStar = (num) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          className={i <= num ? "text-amber-300" : "text-gray-300"}
          icon={faStar}
        />
      );
    }
    return stars;
  };

  return (
    <div ref={ref} className="container w-full bg-gray-100 py-[50px]">
      <h1 className="text-center text-2xl font-bold">All MENU</h1>
      <div className="box-card grid grid-cols-5 gap-3 w-[90%] mx-auto mt-10">
        {Coffee.map((val, idx) => (
          <div key={idx} className="card w-full relative h-[350px] shadow-md rounded-md mt-5 overflow-hidden cursor-pointer">
            <div className="bg-red-400 absolute top-0 start-0 z-10 py-1 px-2 rounded-br-sm text-white">{val.category}</div>
            <div className="image w-full h-[70%] overflow-hidden">
              <img className="w-full h-full hover:scale-[1.07] transition ease-in-out duration-100" src={val.image} alt="" />
            </div>
            <div className="title flex flex-col py-1 px-2 w-full h-[30%]">
              <span>{val.name}</span>
              <span>${val.price}</span>
              <span>{getStar(val.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Product;
